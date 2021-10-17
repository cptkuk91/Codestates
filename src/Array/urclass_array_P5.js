let arr = ['code', 'states'];

arr.push('pre'); // states 뒷쪽에 pre가 추가된다.
arr.push('full'); // pre 뒷쪽에 full이 추가된다.

console.log(arr);
// 배열에 데이터를 추가하는 건 push 였지만


// 반대로 삭제하는 건 pop 이다.
arr.pop();
console.log(arr); // 상단의 pop을 통해 뒷쪽에서 삭제할 수 있다.



// 앞에서부터 삭제할  수 있다.
// shift 를 통해 0번 째부터 삭제할 수 있다.
arr.shift();
console.log(arr);



// 앞에서부터 추가할 수도 있다. push 는 뒷쪽에서부터 추가한다.
// 따라서 앞에서부터 추가할 때는 Unshift를 사용하면 된다.
arr.unshift('hello');
console.log(arr);