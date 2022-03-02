function movingStuff(stuff, limit) {
  // 박스의 갯수를 반환 할 count를 선언한다.
  let count = 0;
  let left = 0; // 가장 왼쪽(작은) 있는 경우
  let right = stuff.length - 1; // 가장 오른쪽(큰) 경우
  // 박스를 크기별로 sort한다.
  let sorted = stuff.sort((a, b) => a - b);

  while (left < right) {
    // left, right으로 가장 작은 무게와 가장 큰것을 합쳐보고
    // left + right <= limit인 경우 count++
    // left + right가 limit보다 큰 경우 right만 count 한다.
    // 이 때 right는 가장 끝에 위치해 있기 때문에 stuff.length - 1을 활용한다.
    if (sorted[left] + sorted[right] <= limit) {
      left++;
      right--;
      count++;
    } else {
      right--;
    }
  }
  return stuff.length - count;
}
