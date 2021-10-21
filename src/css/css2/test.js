let name = "KJ"; // 전역 변수

function showName(){
    name = "SJ"; // 지역 변수
    console.log(name);
}

console.log(name); // KJ
showName(); // SJ
console.log(name); // KJ