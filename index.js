const { program } = require("commander");
const { execSync } = require("child_process");

program
  .command("run")
  .description("Run smart test runner")
  .action(() => {
    console.log("🔍 Detecting changes...");

    let changedFiles = [];
    try {
      changedFiles = execSync("git diff --name-only HEAD~1")
        .toString()
        .split("\n")
        .filter(Boolean);
    } catch (err) {
      // fallback: just diff against HEAD (first commit case)
      changedFiles = execSync("git diff --name-only HEAD")
        .toString()
        .split("\n")
        .filter(Boolean);
    }

    console.log("Changed files:", changedFiles);

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
