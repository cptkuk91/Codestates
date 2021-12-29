// Nullish Coalescing Operator
// Bad Code
function printMessage(text){
    let message = text;
    if(message === null || message === undefined){
        message = 'Nothing to Display';
    }
    console.log(message);
}
console.log(printMessage());

// Good Code
function printMessage(text){
    const message = text ?? "use Nullish Coalescing";
    console.log(message);
}

printMessage('HELLO');
printMessage();