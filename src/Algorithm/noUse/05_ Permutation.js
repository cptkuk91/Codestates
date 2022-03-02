function rockPaperScissors(rounds) {
  // TODO: 여기에 코드를 작성합니다.
  // 가위, 바위, 보 배열을 만들어준다.
  let rps = ["rock", "paper", "scissors"];
  
  // 결과를 담을 배열을 선언해준다.
  let result = [];

  // 재귀함수를 활용해 모든 요소의 경우의 수를 찾는다.
  let permutate = function(roundToGo, playedSoFar){
      if(roundToGo === 0){
          result.push(playedSoFar);
          return;
      }
      for(let i = 0; i < rps.length; i++){
          let currentPlay = rps[i];
          permutate(roundToGo - 1, playedSoFar.concat(currentPlay));
      }
  }
  permutate(rounds || 3, []);
  return result;
}

// function rockPaperScissors (rounds) {
//     // TODO: 여기에 코드를 작성합니다.
//     // 가위, 바위, 보 배열을 만들어준다.
//     let arr = ['rock', 'paper', 'scissors'];

//     // 재귀를 통해 계속해서 돌린다.
//     let result = (arr, selectNum) => {
//       let temp = [];
//       if(selectNum === 1){
//         return arr.map((v) => [v]);
//       }
//       arr.forEach((v, idx, arr) => {
//         // 현재 상태를 current에 담아준다.
//         let current = v;
//         // 남은 값을 활용한다.
//         let restArr = arr;
//         let permArr = result(restArr, selectNum - 1);
//         let combineFix = permArr.map((el) => [current, ...el]);
//         temp.push(...combineFix);
//       });
//       return temp;
//     }
//     return result(arr, rounds || 3);
//   };
