// Promise => async/await

// Good Code
async function displayUser(){
    const user = await fetchUser();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}

