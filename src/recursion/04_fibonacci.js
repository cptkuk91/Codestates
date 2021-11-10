function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    if(num <= 1){
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}
