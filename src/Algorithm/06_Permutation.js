function newChickenRecipe(stuffArr, choiceNum) {
    // 중복 순열 문제가 아니다.
    // 새로운 배열에 stuffArr을 filter 합니다. 000 이 동시에 오는 건 제외시켜버린다.
    let newArr = stuffArr.filter((el) => String(el).slice(-3) !== "000");

    // 재귀함수를 사용한다.
    let recur = (arr, choiceNum) => {
        let result = []; // 결과를 담아줄 곳

        if (choiceNum === 1) {
            return arr.map((el) => [el]);
        }

        arr.forEach((el, idx, arr) => {
            // 현재값을 담아줄 곳을 선언
            let current = el;
            // restArr을 통해서 사용한 건 제외시킨다.
            let restArr = arr.filter((_, index) => index !== idx);
            // 순열을 통한 배열 생성
            let permutationArr = recur(restArr, choiceNum - 1);
            let combineArr = permutationArr.map((el) => [current, ...el]);
            result.push(...combineArr);
        });
        return result;
    };
    return recur(newArr, choiceNum);
}
