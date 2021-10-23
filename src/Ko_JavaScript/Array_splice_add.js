let arr = ["I", "Study", "Home"];

arr.splice(2, 0, "With", "Friend");

console.log(arr);
// arr[2] 부터 0개의 요소를 삭제하고 "With" 와 "Friend"를 추가합니다.
// 주의 사항은 arr[2] 이전에 들어옵니다.
// I Study With Friend Home