let fruitsMap = new Map([
    ['apple', 500],
    ['orange', 300],
    ['berry', 150]
]);

for(let fruit of fruitsMap.keys()){
    console.log(fruit); // 키 값을 반환
}

for(let price of fruitsMap.values()){
    console.log(price);
}

for(let entry of fruitsMap){
    console.log(entry);
}