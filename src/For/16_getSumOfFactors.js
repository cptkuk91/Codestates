function getSumOfFactors(num) {
    let result = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result = result + i;
        }
    }

    return result;
}