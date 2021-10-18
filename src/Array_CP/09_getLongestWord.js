function getLongestWord(str) {
    // TODO: 여기에 코드를 작성합니다.
    let words = str.split(' ');

    let max = words[0];
    for (let word of words) {
        if (word.length > max.length) {
            max = word;
        }
    }

    return max;
}
