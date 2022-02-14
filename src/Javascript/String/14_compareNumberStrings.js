function compareNumberStrings(numStr1, numStr2) {
    let num1 = parseInt(numStr1);
    let num2 = parseInt(numStr2);
    if (num1 > num2) {
        return String(num1 + 5);
    } else {
        return String(num2 + 5);
    }
}