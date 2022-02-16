let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  // 만약 문자열의 길이가 2미만이거나 문자열의 길이가 분해한것과 같을 때
  if (str.length < 2 || str === str.split("").reverse().join()) {
    return str.length;
  } // ???? reverse 하고 join?

  function check(left, right) {
    // 왼쪽이 0보다 크거나 같고 오른쪽이 문자열의 길이보다 작거나 같고 문자열[left] 이 문자열[right -1] 일 때 왼쪽은 1빼주고, 오른쪽은 1더해준다.
    while (left >= 0 && right <= str.length && str[left] === str[right - 1]) {
      left--;
      right++;
    }
    // substring을 통해 잘라낸다. (좌측은+1, 우측-1)까지
    return str.substring(left + 1, right - 1);
  }
  let result = 0;
  // for문을 통해서 문자열의 길이 -1 보다 작을 때 까지 반복하면서 체크해준다.
  for (let i = 0; i < str.length - 1; i++) {
    result = Math.max(result, check(i, i + 1).length, check(i, i + 2).length);
  }
  return result;
};
// 솔직히 잘 모르겠다..
