function letterCapitalize(str) {
    // TODO: 여기에 코드를 작성합니다.
    let words = str.split(' ');
    if(str.length === 0){
        return '';
    }else {
        for(let i = 0; i < words.length; i++){
            if(words[i].length > 0){
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        }
    }
    str = words.join(' ');
    return str;
}
