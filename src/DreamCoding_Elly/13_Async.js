// async, await

// 1. async
async function fetchUser() {
  // do network request in 10secs..
  return "elly";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw 'error';
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 유용한 promise 를 통한 async/await

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}

pickFruits().then(console.log);

// ------- 말 그대로 하나만 선착순 출력
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log);