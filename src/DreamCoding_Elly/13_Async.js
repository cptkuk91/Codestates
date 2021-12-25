// async, await

// 1. async
async function fetchUser() {
    // do network request in 10secs..
    return 'elly';
}

const user = fetchUser();
user.then(console.log);
console.log(user);