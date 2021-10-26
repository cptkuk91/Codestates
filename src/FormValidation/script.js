console.log("Hello World");

let elInputUsername = document.querySelector('#username');
console.log(elInputUsername);

// elInputUsername.value = 'codeStates'; // 기본값 설정이 가능합니다.

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');


elInputUsername.onKeyUp = function () {
    console.log(elInputUsername.value);
    if(isMoreThan4Language(elInputUsername.value)){
        elSuccessMessage.classList.remove('hide');

        elFailureMessage.classList.add('hide');
    } else {
        elSuccessMessage.classList.add('hide');
        elFailureMessage.classList.remove('hide');
    }
};

function isMoreThan4Language(value) {
    return value.length >= 4;
};