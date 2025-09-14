# ⚡ ImpactRun

> A **smart test runner** that saves time by running only the tests impacted by your latest code changes.  
Think of it as **git-aware, coverage-aware test execution** – built for speed and scalability.

---

## ✨ Features
- 🔍 Detects changed files with `git diff`
- 🎯 Maps code changes → impacted test files
- ⚡ Runs only the required tests (skipping the rest)
- ⏱️ Supports **parallel execution**
- 👀 Supports **watch mode** for continuous testing
- 📊 Generates clear reports (pass/fail, skipped tests, time saved)
- 🧩 Framework-agnostic (works with Jest, Mocha, Pytest, etc.)
- 🔗 Easy integration with CI/CD (GitHub Actions, GitLab, Jenkins)

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/<your-username>/impactrun.git
cd impactrun
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the CLI

```bash
# Run impacted tests only
node index.js run --changed

# Run all tests
node index.js run --all
```

### 🧪 Example

Let’s say you modified `math.js`. ImpactRun detects the change and runs only `math.test.js`:

```text
🔍 Detecting changes...
Changed files: math.js
Running impacted tests: math.test.js
 PASS  math.test.js
  ✓ adds numbers (5 ms)
  ✓ subtracts numbers (3 ms)

⏭️ Skipped: 120 tests
✅ Time saved: 80%
```

---

## 📂 Project Structure

```text
impactrun/
 ├── src/              # Core runner logic
 ├── tests/            # Example tests
 ├── index.js          # CLI entry point
 ├── package.json
 └── README.md
```

---

## ⚡ CLI Options Quick Reference

| Command / Flag                        | Description                                                |
| ------------------------------------- | ---------------------------------------------------------- |
| `node index.js run --all`             | Run **all tests** regardless of changes.                   |
| `node index.js run --changed`         | Run **only impacted tests** based on changed files.        |
| `node index.js run --watch`           | **Watch all source files** and rerun all tests on changes. |
| `node index.js run --changed --watch` | **Watch changed files** and rerun impacted tests only.     |
| `--parallel`                          | Run tests **in parallel** to save execution time.          |
| `--help`                              | Show CLI help with all available options.                  |

**Example Usage**

```bash
# Run impacted tests and watch for changes
node index.js run --changed --watch

# Run all tests in parallel
node index.js run --all --parallel
```

**Notes:**

* Combine `--watch` with `--all` or `--changed` for continuous testing.
* `--parallel` can be combined with `--all` or `--changed` for faster execution.

---

## 📊 Test Reporting

* ImpactRun integrates with **Jest HTML Reporter**.
* After running tests, open:

```text
reports/test-report.html
```

* Sample view:

```
ImpactRun Test Report
--------------------
✅ Passed: math.test.js
✅ Passed: math.spec.js
⏭️ Skipped: 0 tests
Time saved: 60%
```

---

## 🛠️ Roadmap

* Auto-discover test mappings (no manual config)
* Coverage-based test selection
* Parallel execution of impacted tests
* HTML/Markdown test reports
* GitHub Actions integration example

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Please follow standard GitHub flow: fork → branch → PR → review → merge.

---

## 📄 License

ISC

```