#!/usr/bin/env node

const { execSync } = require("child_process");
const { Command } = require("commander");
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

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

// ✅ Helper: find impacted test files based on changed files
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

// ✅ Run tests for changed files
function runChangedTests() {
  let changedFiles;
  try {
    changedFiles = execSync("git diff --name-only HEAD~1", { encoding: "utf-8" })
      .split("\n")
      .filter(Boolean);
  } catch {
    changedFiles = [];
  }

  if (changedFiles.length === 0) {
    console.log("✅ No changes detected.");
    return;
  }

  console.log("🔍 Changed files:", changedFiles);

  const impactedTests = findTestFiles(changedFiles);

  if (impactedTests.length === 0) {
    console.log("✅ No impacted tests found. Skipping...");
    return;
  }

  console.log("🧪 Running impacted tests:", impactedTests.join(", "));
  try {
    execSync(`${config.defaultRunner} ${impactedTests.join(" ")}`, { stdio: "inherit" });
  } catch (err) {
    console.error("❌ Test execution failed:", err.message);
  }
}

// ✅ Command: run
program
  .command("run")
  .option("--all", "Run all tests")
  .option("--changed", "Run only tests impacted by changed files")
  .option("--watch", "Watch for file changes and run impacted tests")
  .action((options) => {
    if (options.all) {
      console.log("⚡ Running ALL tests...");
      try {
        execSync(config.defaultRunner, { stdio: "inherit" });
      } catch (err) {
        console.error("❌ Test execution failed:", err.message);
      }
      return;
    }

    if (options.changed && options.watch) {
      console.log("👀 Watching files for changes and running impacted tests...");
      const watcher = chokidar.watch(config.sourceDirectories, {
        ignored: /node_modules/,
        persistent: true,
      });

      watcher.on("change", (filePath) => {
        console.log(`🔄 Detected change on ${filePath}`);
        runChangedTests();
      });

      // Initial run
      runChangedTests();
      return;
    }

    if (options.changed) {
      runChangedTests();
      return;
    }

    if (options.watch) {
      console.log("👀 Watching all source files for changes and running all tests...");
      const watcher = chokidar.watch(config.sourceDirectories, {
        ignored: /node_modules/,
        persistent: true,
      });

      watcher.on("change", (filePath) => {
        console.log(`🔄 Detected change on ${filePath}`);
        try {
          execSync(config.defaultRunner, { stdio: "inherit" });
        } catch (err) {
          console.error("❌ Test execution failed:", err.message);
        }
      });
      return;
    }

    console.log("❌ No option provided. Use --all, --changed, or --watch.");
  });

program.parse(process.argv);