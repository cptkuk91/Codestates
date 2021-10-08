function countCharacter(str, letter) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            counter = counter + 1;
        }
    }

    return counter;
}