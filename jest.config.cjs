module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js", "**/tests/**/*.spec.js"],
  coverageDirectory: "coverage",
  collectCoverage: true,
  coverageReporters: ["text", "html"],
  reporters: [
    "default",
    ["jest-html-reporter", {
      pageTitle: "Test Report",
      outputPath: "reports/test-report.html"
    }]
  ]
};
