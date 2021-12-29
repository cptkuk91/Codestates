const elly = {
  name: "elly",
  age: "18",
};

const name = "elly";
const age = "20";

const elly2 = {
  name: name,
  age: age,
};

console.log(elly);
console.log(elly2);

//-------

const student = {
  nickname: "Anna",
  level: 1,
};

{
  const nickname = student.nickname;
  const level = student.level;
  console.log(nickname, level);
}

const { nickname, level } = student;
console.log(nickname, level);
