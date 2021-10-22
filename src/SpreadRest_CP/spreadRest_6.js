let arr = ['code', 'states'];
let value = [
    ...arr,
    'pre',
    ...['course', 'student']
]

console.log(value);
// 하나의 배열로 합쳐 준다. 따라서
// 'code', 'states', 'pre', 'course', 'student'] 가 출력됨