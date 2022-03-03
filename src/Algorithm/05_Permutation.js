function rockPaperScissors(rounds) {
    // 중복 순열 문제
    // 가위, 바위, 보가 존재한다.
    let rps = ["rock", "paper", "scissors"];
    // 재귀 함수를 통해 반복 시킬 것이다.
    let recur = (rps, selectNum) => {
        let result = []; // 결과를 담는 곳

        // 한 판만 하는 경우
        if(selectNum === 1){
            return rps.map((el) => [el]);
        } // el을 [el] 대괄호에 담은 이유 (bracket);

        // 두 판 이상인 경우
        rps.forEach((element, index, rps) => {
            const current = element; // 현재 상태를 나타낸다.
            const restArr = rps; // 나머지 값에 rps 모두 들어간 이유는 중복 순열이기 때문에 rps를 써도 무방하다.

            const permutationArr = recur(restArr, selectNum - 1); // 재귀를 반복하면 selectNum(판수)를 -1 해준다.
            const combineFix = permutationArr.map((el) => [current, ...el]);
            result.push(...combineFix);
        });
        return result;
    }
    return recur(rps, rounds || 3);
}