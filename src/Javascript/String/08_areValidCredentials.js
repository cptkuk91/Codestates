function areValidCredentials(name, password) {
    // TODO: 여기에 코드를 작성합니다.
    if(name.length > 3 && password.length >= 8){
        return true;
    } else {
        return false;
    }
}
