function findMinLengthOfThreeWords(word1, word2, word3) {
    // TODO: 여기에 코드를 작성합니다.
    let slength = word1.length;

    if (word1.length > word2.length) {
        slength = word2.length
        if (word2.length > word3.length) {
            slength = word3.length;
        }
    } else {
        if (word1.length > word3.length) {
            slength = word3.length
        }
    }
    return Number(slength);
}