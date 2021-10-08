function replaceAll(str, from, to) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === from) {
            result = result + to;
        } else {
            result = result + str[i];
        }
    }

    return result;
}