function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

function factorial(n) {
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
console.log(factorial(5));

