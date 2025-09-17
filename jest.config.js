module.exports = {
    reporters: [
      "default",
      [
        "jest-html-reporter",
        {
          pageTitle: "ImpactRun Test Report",
          outputPath: "reports/test-report.html",
          includeFailureMsg: true,
          includeConsoleLog: true
        }
      ]
    ]
  };
  