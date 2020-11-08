const nthFibonacci = function (n) {
    // TODO: Your code here!
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    let sum = 0;
    let num1 = 0;
    let num2 = 1;
    for (let i = 2; i <= n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
};
