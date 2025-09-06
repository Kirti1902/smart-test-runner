#!/usr/bin/env node
const { program } = require("commander");
const { execSync } = require("child_process");

program
  .command("run")
  .description("Run smart test runner")
  .action(() => {
    console.log("🔍 Detecting changes...");

    let changedFiles = [];
    try {
      // try diff with previous commit
      changedFiles = execSync("git diff --name-only HEAD~1")
        .toString()
        .split("\n")
        .filter(Boolean);
    } catch (err) {
      // fallback: first commit case (no HEAD~1)
      try {
        changedFiles = execSync(
          "git diff --name-only $(git hash-object -t tree /dev/null)"
        )
          .toString()
          .split("\n")
          .filter(Boolean);
      } catch (e) {
        console.log("⚠️ Could not detect changes.");
      }
    }

    console.log("Changed files:", changedFiles);

    // Simple mapping: if "math.js" changes → run "math.test.js"
    const testsToRun = [];
    if (changedFiles.includes("math.js")) {
      testsToRun.push("math.test.js");
    }

    if (testsToRun.length > 0) {
      console.log("Running impacted tests:", testsToRun.join(", "));
      execSync(`npx jest ${testsToRun.join(" ")}`, { stdio: "inherit" });
    } else {
      console.log("No impacted tests found. Skipping.");
    }
  });

program.parse(process.argv);
