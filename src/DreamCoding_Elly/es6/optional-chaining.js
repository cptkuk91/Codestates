// Optional Chaining

const bob = {
    name: 'Tony',
    age: 20
}

const anna = {
    name: 'Jullia',
    age: 30,
    job: {
        title: 'Software'
    }
}

// Bad Code
function displayJobTitle(person){
    // person에 job이 있고, person.job.title이 있다면
    if(person.job && person.job.titel){
        console.log(person.job.title);
    }
}

// Good Code
function displayJobTitle(person){
    if(person.job?.title){
        console.log(person.job.title);
    }
}
displayJobTitle(anna);

// Good Code
function displayJobTitle2(person){
    const title = person.job?.title ?? 'No Job Yet';
    console.log(title);
}

