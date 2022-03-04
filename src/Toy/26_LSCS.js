const LSCS = function (arr) {
    //TODO: 여기에 코드를 작성합니다.
    let max = -Infinity;
    let currentSum = 0;

    for(let i = 0; i < arr.length; i++){
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        max = Math.max(currentSum, max)
    }
    return max;
  };
  