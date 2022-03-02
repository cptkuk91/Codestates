// 배열에서 최대값을 찾는 함수
function largestNum(arr) {
  return arr.reduce((max, item) => {
    if (item > max) {
      return item;
    }
    return max;
  }, 0);
}

//  기수 정렬(radix Sort)는 내부적으로 계수 정렬 (Counting sort)를 사용합니다.
function countingSort(arr, radix) {
  const N = arr.length;
  const output = Array(N).fill(0);
  const count = Array(10).fill(0);

  arr.forEach((item) => {
    const idx = Math.floor(item / radix) % 10;
    count[idx]++;
  });

  // ?
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;
  });

  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / radix) % 10;
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }
  return output; // [?, ?, ?] 출력
}

function radixSort(arr) {
  // todo: 여기에 코드를 작성합니다.
  // 기수 정렬에 대한 이해가 필요한 문제
  let left = [];
  let right = [];
  // 양수의 경우 우측에 넣어주고, 음수인 경우 -1 을 곱해 양수로 변환한다.
  arr.forEach((item) => {
    if (item >= 0) {
      right.push(item);
    } else {
      left.push(item * -1);
    }
  });

  // left에 들어가 있는 최대값을 우선적으로 구해준다.
  let max = largestNum(left);
  let radix = 1;
  while (parseInt(max / radix) > 0) {
    left = countingSort(left, radix);
    radix *= 10;
  }
  //   오른쪽 최대값 구하기
  max = largestNum(right);
  radix = 1;
  while (parseInt(max / radix) > 0) {
    right = countingSort(right, radix);
    radix *= 10;
  }
  return left
    .reverse()
    .map((item) => item * -1)
    .concat(right);
}
