#!/usr/bin/env node

const { execSync } = require("child_process");
const { Command } = require("commander");
const fs = require("fs");
const path = require("path");

const program = new Command();

// ✅ Default config
const defaultConfig = {
  testDirectories: ["tests"],
  sourceDirectories: ["."],
  testFileSuffixes: [".test.js", ".spec.js", ".unit.js"],
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

// ✅ Helper: find impacted test files
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

// ✅ Run tests command
program
  .command("run")
  .option("--all", "Run all tests")
  .option("--changed", "Run only tests impacted by changed files")
  .option("--parallel", "Run impacted tests in parallel")
  .option("--watch", "Watch files and run impacted tests on changes")
  .action((options) => {
    console.log("🔍 Detecting changes...");

    // ✅ Run all tests
    if (options.all) {
      console.log("⚡ Running ALL tests (forced by --all)");
      execSync(`${config.defaultRunner}`, { stdio: "inherit" });
      return;
    }

    // ✅ Run changed tests
    const runChangedTests = () => {
      let changedFiles = [];
      try {
        changedFiles = execSync("git diff --name-only HEAD~1", { encoding: "utf-8" })
          .split("\n")
          .filter(Boolean);
      } catch {
        changedFiles = [];
      }

      if (changedFiles.length === 0) {
        console.log("✅ No changed files detected.");
        return;
      }

      console.log("Changed files:", changedFiles);

      const impactedTests = findTestFiles(changedFiles);

      if (impactedTests.length === 0) {
        console.log("✅ No impacted tests found. Skipping...");
        return;
      }

      console.log(
        `${options.parallel ? "⚡ Running" : "Running"} impacted tests: ${impactedTests.join(", ")}`
      );

      const runnerCommand = options.parallel
        ? `${config.defaultRunner} ${impactedTests.join(" ")}`
        : `${config.defaultRunner} ${impactedTests.join(" ")}`;

      execSync(runnerCommand, { stdio: "inherit" });
    };

    // ✅ Watch mode
    if (options.watch) {
      console.log("👀 Watching files for changes...");

      const watchDirs = [
        ...config.testDirectories,
        ...(config.sourceDirectories || []),
      ];

      watchDirs.forEach((dir) => {
        if (!fs.existsSync(dir)) return;
        fs.watch(dir, { recursive: true }, (eventType, filename) => {
          if (!filename || !filename.endsWith(".js")) return;
          console.log(`🔄 Detected change in ${filename}`);
          runChangedTests();
        });
      });

      return;
    }

    if (options.changed) {
      runChangedTests();
      return;
    }

    console.log("❌ No option provided. Use --all, --changed, or --watch.");
  });

program.parse(process.argv);