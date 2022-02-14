function listPrimes(num) {
    let result = '2';
    for (let candi = 3; candi <= num; candi += 2) {
        let isPrime = true;
        let sqrt = parseInt(Math.sqrt(candi));
        for (let divider = 3; divider <= sqrt; divider += 2) {
            if (candi % divider === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            result = `${result}-${candi}`;
        }
    }

    return result;
}