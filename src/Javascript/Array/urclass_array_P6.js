let words = ['Radagast', 'the', 'Brown'];

// 특정 단어가 words 배열 안에 들어있는지 확인을 할 때

words.indexOf('the');
console.log(words.indexOf('the'));
// 1을 출력한다.

// 없는  element를 넣으면 
// 아래와 같이 -1 을 출력한다.
console.log(words.indexOf('hello'));

// -1을 통해 있는지 없는지 단어를 검사할 수 있다.
console.log(words.indexOf('Brown') !== -1);
// 위 공식에서는 -1이 아닌 경우 Brown은 배열에 들어있다는 뜻이다.

console.log(words.indexOf('없는단어') !== -1);
// 없는단어는 -1이니까 false를 반환하게 된다.