function whois({displayName: displayName, fullName: {firstName: name}}){
    console.log(displayName + " is " + name);
}

let user = {
    id: 42,
    displayName: "KJ",
    fullName: {
        firstName: "Lee",
        lastName: "SJ"
    }
};

whois(user); // KJ is Lee