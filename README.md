# ⚡ ImpactRun -

 Intelligent Test RunnerAbsolutely! I’ll draft a **professional, FANG-level README** that is clear, structured, and industry-ready. It will cover everything we implemented: arrays, math, string utilities, testing, linting, and coverage. Here's a complete example:

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/ImpactRun/actions)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://github.com/yourusername/ImpactRun)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [API / Function Reference](#api--function-reference)
  - [Array Utilities](#array-utilities)
  - [Math Utilities](#math-utilities)
  - [String Utilities](#string-utilities)
- [Testing & Coverage](#testing--coverage)
- [Linting & Code Quality](#linting--code-quality)
- [Contribution](#contribution)
- [License](#license)

---

## Project Overview

**ImpactRun** is a lightweight, high-performance JavaScript utility library providing **array, math, and string helper functions**.  
It is designed to simplify common programming tasks with **robust, well-tested functions**.  

This project demonstrates **best practices in code quality, testing, and maintainability**, ensuring production-level standards.

---

## Features

- ✅ Array operations: `sum`, `average`, `max`, `min`, `unique`, `flatten`, `contains`  
- ✅ Math operations: `factorial`, `isPrime`, `gcd`, `lcm`, `mod`, `power`  
- ✅ String operations: `toUpper`, `toLower`, `length`, `reverse`, `capitalize`, `contains`, `replaceAll`, `trim`  
- ✅ Full **unit test coverage** with Jest  
- ✅ **Linting & code formatting** using ESLint  
- ✅ 100% code coverage  

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

All utilities are exposed via `src/cli.cjs` and can be used programmatically or tested via the command line.

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

### Run Specific Tests

```bash
# Only string tests
npm run impactrun -- --only string

# Only tests for a specific function
npm run impactrun -- --name capitalize
```

---

## Available Scripts

| Script              | Description                    |
| ------------------- | ------------------------------ |
| `npm run impactrun` | Runs all Jest test suites      |
| `npm run lint`      | Runs ESLint with auto-fix      |
| `npm run testlint`  | Runs tests followed by linting |
| `npm run coverage`  | Generates code coverage report |

---

## API / Function Reference

### Array Utilities (`src/array.js`)

| Function               | Description                                 |
| ---------------------- | ------------------------------------------- |
| `sum(arr)`             | Returns the sum of all elements in an array |
| `average(arr)`         | Returns the average value                   |
| `max(arr)`             | Returns the maximum value                   |
| `min(arr)`             | Returns the minimum value                   |
| `unique(arr)`          | Returns an array with unique elements only  |
| `flatten(arr)`         | Flattens nested arrays                      |
| `contains(arr, value)` | Checks if an array contains a value         |

### Math Utilities (`src/utils/math.js`)

| Function       | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| `factorial(n)` | Returns the factorial of `n`. Throws error for negative numbers |
| `isPrime(n)`   | Returns true if `n` is prime                                    |
| `gcd(a, b)`    | Returns greatest common divisor of `a` and `b`                  |
| `lcm(a, b)`    | Returns least common multiple of `a` and `b`                    |
| `mod(a, b)`    | Returns `a % b`. Throws error if `b = 0`                        |
| `power(a, b)`  | Returns `a` raised to the power `b`                             |

### String Utilities (`src/string.js`)

| Function                           | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| `toUpper(str)`                     | Converts string to uppercase                        |
| `toLower(str)`                     | Converts string to lowercase                        |
| `length(str)`                      | Returns length of the string                        |
| `reverse(str)`                     | Reverses the string                                 |
| `capitalize(str)`                  | Capitalizes the first letter of each word           |
| `contains(str, sub)`               | Checks if string contains a substring               |
| `replaceAll(str, search, replace)` | Replaces all occurrences of `search` with `replace` |
| `trim(str)`                        | Removes whitespace from both ends                   |

---

## Testing & Coverage

* Tests implemented using **Jest**
* Full **100% test coverage**
* Commands:

```bash
npm run impactrun   # Run all tests
npm run coverage    # View coverage report
```

---

## Linting & Code Quality

* Uses **ESLint** for static analysis
* Auto-fixable via:

```bash
npm run lint
```

---

## Contribution

We welcome contributions!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/xyz`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push (`git push origin feature/xyz`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

*ImpactRun – Clean, Tested, and Production-Ready JavaScript Utilities.*

```

---

✅ **What this README includes:**  

- Project overview, features, and professional badges  
- Step-by-step installation and usage  
- Industry-level documentation of scripts & API  
- Detailed testing, linting, and coverage instructions  
- Contribution and license sections  

---
