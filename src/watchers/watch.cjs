const chokidar = require("chokidar");
const { runTests } = require("../runner.cjs");

function watchFiles(config, mode = "all") {
  console.log(`👀 Watching files (${mode})...`);
  const watcher = chokidar.watch(config.rootDir, {
    ignored: /node_modules|\.git/,
    persistent: true
  });

  const run = () => runTests({ all: mode === "all", config });

  watcher.on("change", (path) => {
    console.log(`File changed: ${path}`);
    run();
  });

  watcher.on("add", (path) => {
    console.log(`File added: ${path}`);
    run();
  });
}

module.exports = { watchFiles };
