function isPythagorean(side1, side2, side3) {
    const pow1 = side1 * side1;
    const pow2 = side2 ** 2;
    const pow3 = Math.pow(side3, 2);
    // 제곱근 공식


    // a^2 = b^2 + c^2
    // 3,4,5
    // 25 = 16 + 9
    if (pow1 === pow2 + pow3 || pow2 === pow1 + pow3 || pow3 === pow1 + pow2) {
        return true;
    } else {
        return false;
    }
}