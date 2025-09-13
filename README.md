# ⚡ ImpactRun

> A **smart test runner** that saves time by running only the tests impacted by your latest code changes.  
Think of it as **git-aware, coverage-aware test execution** – built for speed and scalability.

---

## ✨ Features
- 🔍 Detects changed files with `git diff`  
- 🎯 Maps code changes → impacted test files  
- ⚡ Runs only the required tests (skipping the rest)  
- 🚀 Supports running tests in **parallel**  
- 👀 Optional **watch mode** to automatically run impacted tests on file changes  
- 📊 Generates coverage reports and test summaries  
- 🔗 Easy integration with CI/CD (GitHub Actions, GitLab, Jenkins)  
- 🧩 Framework-agnostic (works with Jest, Mocha, Pytest, etc.)

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

Run **only impacted tests**:

```bash
node index.js run --changed
```

Run **all tests**:

```bash
node index.js run --all
```

Run **impacted tests in parallel**:

```bash
node index.js run --changed --parallel
```

Run **watch mode** to automatically detect changes:

```bash
node index.js run --changed --watch
```

---

## 🧪 Example

Let’s say you modified `math.js`.
ImpactRun detects the change and runs only `math.test.js` and `math.spec.js`:

```text
🔍 Detecting changes...
Changed files: [ 'math.js', 'index.js' ]
Running impacted tests: tests/math.test.js, tests/math.spec.js
⚡ Running 2 tests in parallel...
PASS  tests/math.test.js
PASS  tests/math.spec.js
✅ Passed: tests/math.test.js
✅ Passed: tests/math.spec.js
⏭️ Skipped: 0 tests
✅ Estimated time saved: 50%
```

---

## ⚙️ Configuration

You can customize ImpactRun by creating an `impactrun.config.json` in the root:

```json
{
  "testDirectories": ["tests"],
  "sourceDirectories": ["."],
  "testFileSuffixes": [".test.js", ".spec.js", ".unit.js"],
  "defaultRunner": "jest"
}
```

* `testDirectories`: Folders where your test files are located
* `sourceDirectories`: Folders where your source code is located
* `testFileSuffixes`: Test file patterns to detect
* `defaultRunner`: Test runner CLI command (`jest`, `mocha`, etc.)

---

## 📂 Project Structure

```text
impactrun/
 ├── tests/                # Example tests
 ├── coverage/             # Coverage reports
 ├── index.js              # CLI entry point
 ├── impactrun.config.json # Config file
 ├── package.json
 └── README.md
```

---

## 🛠️ Roadmap

* Auto-discover test mappings (no manual config)
* Coverage-based test selection
* HTML/Markdown test reports
* GitHub Actions / CI integration examples

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## ✅ Summary of Implementations

* Git-aware test detection (`--changed`)
* Run all tests (`--all`)
* Parallel execution (`--parallel`)
* Watch mode for automatic reruns (`--watch`)
* Configurable via `impactrun.config.json`
* Integrated coverage support (`jest --coverage`)
* Outputs test summary with pass/fail and estimated time saved

```

---