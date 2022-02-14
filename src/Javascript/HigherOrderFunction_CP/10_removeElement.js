function removeElement(arr, discarder) {
    // TODO: 여기에 코드를 작성합니다.
    return arr.filter(function(el){
        if(el !== discarder){
            return true;
        }
        return false;
    });
}
