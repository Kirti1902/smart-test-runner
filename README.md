 #⚡ ImpactRun  

> A **smart test runner** that saves time by running only the tests impacted by your latest code changes.  
Think of it as **git-aware, coverage-aware test execution** – built for speed and scalability.  

---

## ✨ Features  
- 🔍 Detects changed files with `git diff`  
- 🎯 Maps code changes → impacted test files  
- ⚡ Runs only the required tests (skipping the rest)  
- 📊 Generates clear reports (pass/fail, skipped tests, time saved)  
- 🔗 Easy integration with CI/CD (GitHub Actions, GitLab, Jenkins)  
- 🧩 Framework-agnostic (currently works with Jest, easily extendable)  

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
node index.js run
✅ ImpactRun will automatically detect which tests are affected by your latest changes and run only those.

🧪 Example Run
Suppose you modified math.js.
ImpactRun detects the change and runs only math.test.js:

bash
Copy code
🔍 Detecting changes...
Changed files: [ 'math.js', 'math.test.js' ]
Running impacted tests: math.test.js
 PASS  ./math.test.js
  ✓ adds numbers (5 ms)
  ✓ subtracts numbers (3 ms)

⏭️ Skipped: 120 tests  
✅ Time saved: ~80%  
📂 Project Structure
bash
Copy code
impactrun/
 ├── docs/             # Documentation (how it works, workflow)
 ├── index.js          # CLI entry point
 ├── math.js           # Example source file
 ├── math.test.js      # Example test file
 ├── package.json
 └── README.md
🛠️ Roadmap
 Auto-discover test mappings (no manual config)

 Coverage-based test selection

 Parallel execution of impacted tests

 HTML/Markdown test reports

 GitHub Actions integration example

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and open a pull request 🚀