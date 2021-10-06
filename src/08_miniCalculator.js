function miniCalculator(num1, num2, operator) {
    // TODO: 여기에 코드를 작성합니다.
    if(operator === '+'){
        return num1 + num2;
    } else if(operator === '-' ){
        return num1 - num2;
    } else if(operator === '*'){
        return num1 * num2;
    } else {
        return num1 / num2;
    }
}
