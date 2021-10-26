let names = "KJ, SJ, SH";

let arr = names.split(", ");

for(let props of arr){
    console.log(`${props}에게 문자를 보내요.`);
}

// KJ에게 문자를 보내요.
// SJ에게 문자를 보내요.
// SH에게 문자를 보내요.