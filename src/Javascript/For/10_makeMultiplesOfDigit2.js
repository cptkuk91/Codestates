function makeMultiplesOfDigit2(num1, num2) {
    let count = 0;
    let start = num1;
    let end = num2;

    if (num1 > num2) {
        start = num2;
        end = num1;
    }

    if (start === 0) {
        start = 1;
    }

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            count += 1;
        }
    }

    return count;
}