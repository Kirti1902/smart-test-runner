function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
}
function pow(a, b) { return Math.pow(a, b); }
function mod(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a % b;
}
function factorial(n) {
    if (n < 0) throw new Error("Factorial of negative number is not defined");
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

module.exports = {
    add, sub, mul, div, pow, mod, factorial, isPrime, gcd, lcm
};
