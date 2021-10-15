function makeMarginalString(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= i; j += 1) {
            result = result + str[j];
        }
    }

    return result;
}