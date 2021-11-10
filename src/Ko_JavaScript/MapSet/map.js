let map = new Map();

map.set('1', 'KJ'); // 문자형 키
map.set(1, 'SJ'); // 숫자형 키
map.set(true, 'SH'); // 불린형 키

console.log(map.get(1)); // SJ 출력
console.log(map.get('1')); // KJ 출력
console.log(map.size); // 3 출력

console.log(map.get(true)); // SH 출력