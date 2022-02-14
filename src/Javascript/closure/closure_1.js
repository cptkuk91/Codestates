let seenYet = function() {
    let archive = {};
    return function (val) {
        if(archive[val]){
            return true;
        }
        archive[val] = true;
        return false;
    }
}
