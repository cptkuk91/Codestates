function myFun(a,b, ...manyMoreArgs){
    console.log("a", a); // one 출력
    console.log("b", b); // two 출력
    console.log("manyMoreArgs", manyMoreArgs); // 나머지를 전부 배열에 담아서 출력
    // [three, four, five, six]
}

myFun("one", "two", "three", "four", "five", "six");