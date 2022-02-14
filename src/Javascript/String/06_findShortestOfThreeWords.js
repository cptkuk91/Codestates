function findShortestOfThreeWords(word1, word2, word3) {
    // TODO: 여기에 코드를 작성합니다.
    let shortestWord = word1;

    if (word1.length > word2.length) {
        shortestWord = word2;
        if (word2.length > word3.length) {
            shortestWord = word3;
        }
    } else {
        if (word1.length > word3.length) {
            shortestWord = word3;
        }
    }
    return shortestWord;
}
