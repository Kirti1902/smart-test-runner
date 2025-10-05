# ⚡ ImpactRun - Intelligent Test Runner

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/ImpactRun/actions)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](./coverage/index.html)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [API / Function Reference](#api--function-reference)
- [Testing & Coverage](#testing--coverage)
- [Linting & Code Quality](#linting--code-quality)
- [Pre-commit Hooks](#pre-commit-hooks)
- [Contribution](#contribution)
- [License](#license)

---

## Project Overview

**ImpactRun** is a lightweight, high-performance JavaScript utility library providing **array, math, and string helper functions**.  
It simplifies common programming tasks while following **best practices in testing, linting, and maintainability**.

This project demonstrates **production-ready, FAANG-level engineering standards**.

---

## Features

- ✅ Array operations: `sum`, `average`, `max`, `min`, `unique`, `flatten`, `contains`  
- ✅ Math operations: `factorial`, `isPrime`, `gcd`, `lcm`, `mod`, `power`  
- ✅ String operations: `toUpper`, `toLower`, `length`, `reverse`, `capitalize`, `contains`, `replaceAll`, `trim`  
- ✅ Full **unit test coverage** with Jest  
- ✅ **Linting & code formatting** using ESLint  
- ✅ **Pre-commit hooks** using Husky + lint-staged  
- ✅ 100% code coverage with HTML reports  

---

## Installation

Ensure you have **Node.js v18+** installed.

```bash
# Clone the repository
git clone https://github.com/yourusername/ImpactRun.git
cd ImpactRun

# Install dependencies
npm install
````

---

## Usage

### Run All Tests

```bash
npm run impactrun
```

### Run Lint and Auto-Fix

```bash
npm run lint
```

### Run Combined Test & Lint

```bash
npm run testlint
```

### Run Coverage Report

```bash
npm run coverage
```

### Run Specific Tests

```bash
# Only string tests
npm run impactrun -- --only string

# Only tests for a specific function
npm run impactrun -- --name capitalize
```

---

## Available Scripts

| Script              | Description                         |
| ------------------- | ----------------------------------- |
| `npm run impactrun` | Runs all Jest test suites           |
| `npm run lint`      | Runs ESLint with auto-fix           |
| `npm run testlint`  | Runs tests followed by linting      |
| `npm run coverage`  | Generates code coverage report      |
| `npm run prepare`   | Prepares Husky hooks for pre-commit |

---

## Project Structure

```
ImpactRun/
├── src/
│   ├── cli.cjs                # CLI entry point
│   ├── runner.cjs             # Test runner
│   ├── config/config.cjs      # Config files
│   ├── utils/                 # Utility functions
│   │   ├── array.js
│   │   ├── math.js
│   │   └── string.js
│   └── watchers/watch.cjs     # File watcher
├── tests/                     # Unit & integration tests
├── coverage/                  # Coverage reports
├── reports/                   # Jest HTML reports
├── .github/workflows/         # GitHub Actions CI
├── .husky/                    # Git hooks
├── package.json
├── jest.config.cjs
└── README.md
```

---

## API / Function Reference

### Array Utilities (`src/utils/array.js`)

| Function               | Description                             |
| ---------------------- | --------------------------------------- |
| `sum(arr)`             | Returns sum of all elements in an array |
| `average(arr)`         | Returns average value                   |
| `max(arr)`             | Returns maximum value                   |
| `min(arr)`             | Returns minimum value                   |
| `unique(arr)`          | Returns an array with unique elements   |
| `flatten(arr)`         | Flattens nested arrays                  |
| `contains(arr, value)` | Checks if array contains a value        |

### Math Utilities (`src/utils/math.js`)

| Function       | Description                         |
| -------------- | ----------------------------------- |
| `factorial(n)` | Returns factorial of `n`            |
| `isPrime(n)`   | Returns true if `n` is prime        |
| `gcd(a, b)`    | Greatest common divisor             |
| `lcm(a, b)`    | Least common multiple               |
| `mod(a, b)`    | Returns `a % b`                     |
| `power(a, b)`  | Returns `a` raised to the power `b` |

### String Utilities (`src/utils/string.js`)

| Function                           | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| `toUpper(str)`                     | Converts string to uppercase                        |
| `toLower(str)`                     | Converts string to lowercase                        |
| `length(str)`                      | Returns string length                               |
| `reverse(str)`                     | Reverses the string                                 |
| `capitalize(str)`                  | Capitalizes first letter of each word               |
| `contains(str, sub)`               | Checks if string contains a substring               |
| `replaceAll(str, search, replace)` | Replaces all occurrences of `search` with `replace` |
| `trim(str)`                        | Removes whitespace from both ends                   |

---

## Testing & Coverage

* **Jest** used for unit tests
* 100% test coverage
* Coverage HTML reports available in `/coverage` and Jest HTML reports in `/reports`

---

## Linting & Code Quality

* ESLint static analysis
* Auto-fix with:

```bash
npm run lint
```

---

## Pre-commit Hooks

* Husky + lint-staged ensure code quality before committing:

```bash
# Automatically runs ESLint on staged files
npx lint-staged
```

---

## Contribution

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit changes (`git commit -m "feat: add awesome feature"`)
4. Push to branch (`git push origin feature/awesome-feature`)
5. Open a PR 🚀

---

## License

MIT License - see [LICENSE](LICENSE)

---

*ImpactRun – Clean, Tested, and Production-Ready JavaScript Utilities.*

```

---
