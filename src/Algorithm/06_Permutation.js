function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.

  // 결과를 반환할 빈 배열 만들기
  let result = [];

  // stuffArr에 0이 3개 이상이면 빈배열 반환하기, choiceNum보다 재료가 적은 경우 빈배열 반환하기
  for (let i = 0; i < stuffArr.length; i++) {
    let element = String(stuffArr[i])
      .split("")
      .filter((e) => e === "0");
    if (element.length <= 2) {
      result.push(stuffArr[i]);
    }
  }
  result.sort((a, b) => a - b);
  if (result.length === 0 || result.length < choiceNum) {
    return [];
  }

  // result를 바탕으로 결과(순열) 구하기
  let newResult = [];
  let permutation = (arr, bucket, n) => {
    if (n === 0) {
      newResult.push(bucket);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      // 하나를 초이스 한다.
      let choice = arr[i];
      // 위에서 나열한 배열을 slice해 넣어준다.
      let sliceArr = arr.slice();
      // 초이스만 뺀다.
      sliceArr.splice(i, 1);
      permutation(sliceArr, bucket.concat(choice), n - 1);
    }
  };
  permutation(result, [], choiceNum);
  return newResult;
}

// function newChickenRecipe(stuffArr, choiceNum) {
//     // TODO: 여기에 코드를 작성하세요.
//     // sutffArr에 0이 3개 이상이면 빈배열 반환하기
//     let result = [];

//     for(let i = 0; i < stuffArr.length; i++){
//       let element = String(stuffArr[i]).split('').filter((e) => e === '0');
//       if(element.length <= 2){
//         result.push(stuffArr[i]);
//       }
//     }
//     // 정렬
//     result.sort((a, b) => a - b);

//     // 엣지 케이스 제거
//     if(result.length === 0 || result.length < choiceNum) {
//       return [];
//     };

//     // 순열 공식
//     let newResult = [];
//     let permutation = (arr, bucket, n) => {
//       if(n === 0){
//         newResult.push(bucket);
//         return;
//       }
//       for(let i = 0; i < arr.length; i++){
//         const choice = arr[i];
//         const sliceArr = arr.slice();
//         sliceArr.splice(i, 1);
//         permutation(sliceArr, bucket.concat(choice), n-1);
//       }
//     };

//     permutation(result, [], choiceNum);
//     return newResult;
//   }
