# ⚡ ImpactRun - Intelligent Test Runner

ImpactRun is a **smart test runner** built for Node.js projects that leverages **Git-based change detection** to run only impacted tests, improving efficiency during development. It supports full test execution, watching files for changes, and generates detailed test reports and coverage.

---

## Features

- Run **all tests** or **only impacted tests** after code changes.
- **Watch mode** for continuous testing during development.
- Generates **HTML test reports** and **code coverage reports**.
- Works seamlessly with **Jest** as the default test runner.
- Git-aware: detects changes based on commits.

---

## Project Structure

ImpactRun/
├─ src/ # Source code
│ ├─ cli.js # CLI entry point
│ ├─ runner.js # Test runner logic
│ └─ config/
│ └─ config.js # Configuration loader
├─ tests/ # Test files
│ ├─ math.test.js
│ ├─ math.spec.js
│ └─ operations.unit.js
├─ coverage/ # Coverage reports
├─ reports/ # HTML test reports
├─ package.json
├─ package-lock.json
├─ impactrun.config.json # Project-specific config
└─ README.md

yaml
Copy code

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ImpactRun
Install dependencies:

bash
Copy code
npm install
CLI Usage
All commands are run via the impactrun npm script:

Command	Description
npm run impactrun -- --all	Runs all tests in the project.
npm run impactrun -- --changed	Runs only tests impacted by changed source files.
npm run impactrun -- --watch	Watches all files and reruns all tests on changes.
npm run impactrun -- --changed --watch	Watches changed files and runs only impacted tests.

Example:
bash
Copy code
# Run all tests
npm run impactrun -- --all

# Run only impacted tests
npm run impactrun -- --changed

# Watch all files and rerun tests
npm run impactrun -- --watch

# Watch changed files and rerun impacted tests
npm run impactrun -- --changed --watch
Testing & Coverage
Run all Jest tests:

bash
Copy code
npm test
Generate code coverage:

bash
Copy code
npm run test:coverage
Generate HTML test report:

bash
Copy code
npm run test:report
Coverage reports are in coverage/.

HTML reports are in reports/test-report.html.

Configuration
ImpactRun uses impactrun.config.json:

json
Copy code
{
  "testDirectories": ["tests"],
  "sourceDirectories": ["."],
  "testFileSuffixes": [".test.js", ".spec.js", ".unit.js"],
  "defaultRunner": "jest"
}
testDirectories: Directories containing test files.

sourceDirectories: Directories containing source code.

testFileSuffixes: File suffixes for test detection.

defaultRunner: Test runner to use (currently only jest supported).

Contributing
Fork the repository.

Create a feature branch: git checkout -b feature/your-feature.

Commit your changes: git commit -m "Add feature description".

Push to the branch: git push origin feature/your-feature.

Create a pull request.

License
This project is licensed under the MIT License.