#!/usr/bin/env node

const { execSync } = require("child_process");
const { Command } = require("commander");
const fs = require("fs");
const path = require("path");

const program = new Command();

// ✅ Default config
const defaultConfig = {
  testDirectories: ["tests", "__tests__"],
  testFileSuffixes: [".test.js", ".spec.js"],
  defaultRunner: "jest",
};

// ✅ Load impactrun.config.json if it exists
function loadConfig() {
  const configPath = path.resolve(process.cwd(), "impactrun.config.json");

  if (fs.existsSync(configPath)) {
    try {
      const userConfig = JSON.parse(fs.readFileSync(configPath, "utf-8"));
      return { ...defaultConfig, ...userConfig };
    } catch (err) {
      console.error("❌ Failed to parse impactrun.config.json:", err.message);
      return defaultConfig;
    }
  }

  return defaultConfig;
}

const config = loadConfig();
console.log("⚙️  Using config:", config);

// ✅ Helper: find impacted test files by filename
function findTestFiles(changedFiles) {
  const impactedTests = [];

  for (const file of changedFiles) {
    const baseName = path.basename(file, path.extname(file));

    for (const dir of config.testDirectories) {
      for (const suffix of config.testFileSuffixes) {
        const testFile = path.join(dir, `${baseName}${suffix}`);
        if (fs.existsSync(testFile)) {
          impactedTests.push(testFile);
        }
      }
    }
  }

  return impactedTests;
}

// ✅ Helper: find impacted tests using coverage
function getImpactedTestsByCoverage(changedFiles) {
  const coveragePath = path.resolve(process.cwd(), "coverage/coverage-final.json");
  if (!fs.existsSync(coveragePath)) {
    return [];
  }

  const coverage = JSON.parse(fs.readFileSync(coveragePath, "utf-8"));
  const impactedTests = new Set();

  for (const testFile in coverage) {
    const coveredFiles = Object.keys(coverage[testFile].s);
    for (const changed of changedFiles) {
      if (coveredFiles.includes(changed)) {
        impactedTests.add(testFile);
      }
    }
  }

  return Array.from(impactedTests);
}

// ✅ Command: run tests
program
  .command("run")
  .option("--all", "Run all tests")
  .option("--changed", "Run only tests impacted by changed files")
  .action((options) => {
    console.log("🔍 Detecting changes...");

    if (options.all) {
      console.log("⚡ Running ALL tests (forced by --all)");
      execSync(`${config.defaultRunner}`, { stdio: "inherit" });
      return;
    }

    if (options.changed) {
      let changedFiles;
      try {
        changedFiles = execSync("git diff --name-only HEAD~1", { encoding: "utf-8" })
          .split("\n")
          .filter(Boolean);
      } catch {
        changedFiles = [];
      }

      console.log("Changed files:", changedFiles);

      // Use coverage-based detection if coverage exists
      let impactedTests = [];
      const coveragePath = path.resolve(process.cwd(), "coverage/coverage-final.json");
      if (fs.existsSync(coveragePath)) {
        impactedTests = getImpactedTestsByCoverage(changedFiles);
      } else {
        impactedTests = findTestFiles(changedFiles);
      }

      if (impactedTests.length === 0) {
        console.log("✅ No impacted tests found. Skipping...");
        return;
      }

      console.log("Running impacted tests:", impactedTests.join(", "));
      execSync(`${config.defaultRunner} ${impactedTests.join(" ")}`, { stdio: "inherit" });
      return;
    }

    console.log("❌ No option provided. Use --all or --changed.");
  });

program.parse(process.argv);
