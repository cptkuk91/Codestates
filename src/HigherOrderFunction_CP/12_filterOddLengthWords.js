function filterOddLengthWords(words) {
    return words.filter(function(el){
        return el.length % 2 !== 0;
    });
}