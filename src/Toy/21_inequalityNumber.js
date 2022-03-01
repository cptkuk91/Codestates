const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  // 부등호 수를 만든 경우를 생각해야한다.
  const aux = (idx, signs, nums, digits, isVisited) => {
    if(idx === signs.length){
      return parseInt(nums.join(''));
    }
    const sign = signs[idx];
    // 숫자를 확인하고, 큰 수를 구할 때는 큰 수인 9부터, 작은 수를 구할 때는 0부터 진행한다.
    // 이전에 사용한 숫자인 경우 스킵한다.
    for(let i = 0; i < digits.length; i++){
      const right = digits[i];
      if(isVisited[right]){
        continue;
      }
      // 첫 번째 숫자가 아닌 경우
      if(idx >= 0){
        const left = nums[nums.length - 1];
        if(sign === '<' && left >= right){
          continue;
        }
        if(sign === '>' && left <= right){
          continue;
        }
      }
      // 조건을 만족하고, 첫 숫자인 경우 result에 대입시켜준다.
      isVisited[right] = true;
      const result = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if(result !== undefined){
        return result;
      }
      // 탐색에 실패한 경우, 시도한 숫자의 상태를 다시 false로 바꿔야한다.
      isVisited[right] = false;
    }
    return undefined;
  };
  signs = signs.split(' ');
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  // max의 경우 큰 수부터 진행해야하기 때문에 digits을 뒤짚어 9부터 사용한다.
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));

  return max - min;
};
