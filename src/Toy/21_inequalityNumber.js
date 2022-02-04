const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  const aux = (idx, signs, nums, digits, isVisited) => {
    if (idx === signs.length) {
      // 부등호 수를 만든 경우
      return parseInt(nums.join(''));
    }
    const sign = signs[idx];
    for (let i = 0; i < digits.length; i++) {
      // 숫자를 차례대로 검토한다.
      // max를 구할 때 9부터, min을 구할 때 0부터
      const right = digits[i];
      if (isVisited[right]) continue;

      if (idx >= 0) {
        const left = nums[nums.length - 1];
        if (sign === '<' && left >= right) continue;
        if (sign === '>' && left <= right) continue;
      }

      // 조건을 만족하거나 첫번째 숫자인 경우
      isVisited[right] = true;
      const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if (target !== undefined) {
        return target;
      }
      isVisited[right] = false;
    }
    return undefined;
  };

  signs = signs.split(' ');
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};
