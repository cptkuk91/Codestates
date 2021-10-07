function takeLetters(num, str) {
    if (num >= str.length || str === '') {
        return str;
    }

    return str.slice(0, num);
}