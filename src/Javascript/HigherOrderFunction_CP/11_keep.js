function keep(arr, keeper) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.filter(function(el){
        if(el === keeper){
            return true;
        }
        return false;
    })
}
