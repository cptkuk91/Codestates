// const name = "elly";
// const age = 4;
// console.log(name, age);

//----

const elly = {
    name: "elly",
    age: 4
};

function print(person){
    console.log(person.name);
    console.log(person.age);
}

print(elly);

// Object는 키와 값의 집합체이고, 새롭게 키를 추가 할 수도 있고, 삭제할 수도 있다.

// 데이터를 추가 해보자.
elly.hasJob = true;
console.log(elly); // 추가 된 걸 확인 할 수 있다.

// 객체에서의 키는 항상 스트링 타입으로 전달해야한다.

// ----
// 3. Property Value Shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'John', age: 4};
const person3 = {name: 'Steve', age: 6};
const person4 = makePerson('elly', 30);

// function makePerson(name, age){
//     return{
//         name: name,
//         age: age,
//     };
// }

function makePerson(name, age){
    return{
        name,
        age
    };
}
// JavaScript에서는 키와 값(value)가 동일하다면 생략 할 수 있다.

console.log(person4);

// 위와 같은 방법으로 만들 수 있지만, 현재는 함수를 대문자로 시작하고 this.name = name; 과 같은 방법으로 작성한다.

function Person(name, age){
    this.name = name;
    this.age = age;
}

const person5 = new Person("Kukjin", 31);
console.log(person5);

//--------
// 05. in operator: 해당하는 키가 객체 안에 있는지 확인 할 수 있다. (key in obj);
console.log('name' in elly); // true 반환
// 없는 키를 입력할 경우 false를 반환한다.

// 06 for... in, for... of
// for(key in obj)
for(key in elly){
    console.log(key);
    // name
    // age
    // hasJob 출력
}

// for(value of iterable)
// 순차적인 배열의 데이터를 값을 가져온다.
const array = [1,2,3,4,5];
for(value of array){
    console.log(value);
}

// cloning
// Object.assign
const user = {
    name: 'KJ',
    age: 31
}

const user2 = user;
user2.name = 'coder';
console.log(user2); // coder 로 변경 된 상태로 출력
console.log(user); // 문제는 user와 같은 ref를 바라보기 때문에 user의 name도 변경된다.

// 완전 복사하기 위해서는 어떤 방법을 사용해야 할까?
const user4 = {};

Object.assign(user4, user);
console.log(user4);
user4.name = "SJ";
console.log(user4); // SJ로 name 변경
console.log(user); // name coder 유지!

// 여러개를 Object.assign 하는 경우?!
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// 동일한 property가 있다면 값을 덮어 씌운다. 따라서 fruit2가 더 뒤에 있기 때문에 fruit2 property를 가져온다.