# ⚡ ImpactRun

> A **smart test runner** that saves time by running only the tests impacted by your latest code changes.  
Think of it as **git-aware, coverage-aware test execution** – built for speed and scalability.

---

## ✨ Features
- 🔍 Detects changed files with `git diff`
- 🎯 Maps code changes → impacted test files
- ⚡ Runs only the required tests (skipping the rest)
- 📂 Supports multiple test directories (`tests/`, `__tests__/`, etc.)
- 🔄 Falls back to running **all tests** if no direct mapping is found
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
3. Run the CLI
bash
Copy code
node index.js run --changed
✅ ImpactRun will automatically detect which tests are affected by your latest changes and run only those.

🧪 Example
Let’s say you modified math.js.
ImpactRun detects the change and runs only math.test.js:

bash
Copy code
🔍 Detecting changes...
Changed files: math.js
Running impacted tests: math.test.js
 PASS  tests/math.test.js
  ✓ adds numbers (5 ms)
  ✓ subtracts numbers (3 ms)
If no impacted tests are found, ImpactRun runs all tests automatically:

bash
Copy code
🔍 Detecting changes...
Changed files: README.md
✅ No impacted tests found. Running all as fallback...
 PASS  tests/math.test.js
  ✓ adds numbers
  ✓ subtracts numbers
📂 Project Structure
bash
Copy code
impactrun/
 ├── tests/            # Example tests
 ├── math.js           # Example source file
 ├── index.js          # CLI entry point
 ├── package.json
 ├── .gitignore
 └── README.md
🛠️ Roadmap
Auto-discover test mappings (no manual config)

Coverage-based test selection

Parallel execution of impacted tests

HTML/Markdown test reports

GitHub Actions integration example

🤝 Contributing
Contributions, issues, and feature requests are welcome!