// Template Literals (Template String)

const person = {
  name: "Julia",
  score: 4,
};

// Bad Code
console.log("Hello " + person.name);

// Good Code
console.log(`Hello ${person.name}, current score is ${person.score}`);

// Good Code
function greetings(person) {
  let { name, score } = person;
  console.log(`Hello ${name}, current score is ${score}`);
}
