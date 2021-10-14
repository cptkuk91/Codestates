function getMaxNumberFromString(str) {
    let maxNum = 0;

    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) > maxNum) {
            maxNum = parseInt(str[i]);
        }
    }

    return String(maxNum);
}

