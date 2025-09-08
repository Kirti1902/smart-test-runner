# ⚡ ImpactRun

> A **smart test runner** that saves time by running only the tests impacted by your latest code changes.  
Think of it as **git-aware, coverage-aware test execution** – built for speed and scalability.

---

## ✨ Features
- 🔍 Detects changed files with `git diff`
- 🧪 Maps code changes → impacted test files using:
  - Filename-based matching  
  - **Coverage-based detection** (from Jest coverage reports)
- ⚡ Runs only the required tests (skipping the rest)
- 📊 Generates clear reports (pass/fail, skipped tests, time saved)
- 🔗 Easy integration with CI/CD (GitHub Actions, GitLab, Jenkins)
- 🧩 Framework-agnostic (works with Jest, Mocha, Pytest, etc.)

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/<your-username>/impactrun.git
cd impactrun
2. Install Dependencies
bash
Copy code
npm install
3. Run Coverage (for coverage-based impacted test selection)
bash
Copy code
npm run test:coverage
Generates coverage/coverage-final.json used by ImpactRun to detect impacted tests.

4. Run the CLI
Run only impacted tests
bash
Copy code
node index.js run --changed
Example:

bash
Copy code
🔍 Detecting changes...
Changed files: [ 'math.js' ]
Running impacted tests: tests/math.test.js, tests/math.spec.js
 PASS  tests/math.spec.js
 PASS  tests/math.test.js
Run all tests (ignore changed detection)
bash
Copy code
node index.js run --all
📂 Project Structure
text
Copy code
impactrun/
 ├── src/                     # Core runner logic
 ├── tests/                   # Example tests
 ├── index.js                 # CLI entry point
 ├── impactrun.config.json    # Optional configuration
 ├── package.json
 ├── package-lock.json
 └── README.md
⚙️ Configuration (impactrun.config.json)
json
Copy code
{
  "testDirectories": ["tests", "__tests__"],
  "testFileSuffixes": [".test.js", ".spec.js", ".unit.js"],
  "defaultRunner": "jest"
}
testDirectories → directories to search for test files

testFileSuffixes → allowed suffixes for test files

defaultRunner → your test runner (Jest, Mocha, etc.)

🛠️ Roadmap
Auto-discover test mappings (no manual config)

Coverage-based test selection (done)

Parallel execution of impacted tests

HTML/Markdown test reports

GitHub Actions integration example

🤝 Contributing
Contributions, issues, and feature requests are welcome!

⚡ GitHub Actions Integration

Workflow file: .github/workflows/impactrun.yml

name: ImpactRun Tests

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

jobs:
  impactrun:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Generate coverage
        run: npm run test:coverage

      - name: Run ImpactRun
        run: node index.js run --changed


Automatically detects changed files in PRs/pushes

Runs only the impacted tests using coverage data

Saves CI time and resources


---

This README now includes:

1. **Coverage-based instructions**  
2. **CLI usage examples** (`--changed` and `--all`)  
3. **Project structure & config**  
4. **GitHub Actions workflow example**  

---

If you want, the **next step** can be **adding parallel execution** for impacted tests to speed up CI even more.  