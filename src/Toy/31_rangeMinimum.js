const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  return ranges.map((range) => {
    let [start, end] = range;
    let min = Number.MAX_SAFE_INTEGER; // JavaScript에서 안전한 최대 정수값을 나타냅니다.
    for(let i = start; i <= end; i++){
      if(arr[i] <= min) min = arr[i];
    }
    return min;
  })
};
