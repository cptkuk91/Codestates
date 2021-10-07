function dropLetters(num, str) {
    if (num >= str.length) {
        return '';
    }

    return str.slice(num);
}