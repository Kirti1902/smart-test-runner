#!/usr/bin/env node

const { Command } = require("commander");
const { runAllTests, runChangedTests, watchFiles } = require("./runner");
const loadConfig = require("./config/config");

const program = new Command();

program
  .command("run")
  .option("--all", "Run all tests")
  .option("--changed", "Run only impacted tests")
  .option("--watch", "Watch for changes and rerun tests")
  .action(async (options) => {
    const config = loadConfig();

    if (options.all && options.watch) {
      watchFiles(config, "all");
    } else if (options.changed && options.watch) {
      watchFiles(config, "changed");
    } else if (options.all) {
      await runAllTests();
    } else if (options.changed) {
      await runChangedTests(config);
    } else {
      await runAllTests();
    }
  });

program.parse(process.argv);
