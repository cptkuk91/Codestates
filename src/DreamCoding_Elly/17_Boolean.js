// false: 0, -0, '', null, undefined
// true: -1, 'hello' (입력값이 있는 경우)
let num = 9; // 값 할당이 없는 경우 undefined로 인식한다.
if(num) {
    console.log('true');
} else {
    console.log('false');
}

num && console.log(num);
