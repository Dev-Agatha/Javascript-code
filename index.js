const operator = prompt('Enter operator (either +,-,* or / ) : ');

const number1= parseFloat(prompt ('Enter first number:'));
const number2= parseFloat(prompt('Enter second number:'));

let result;

if (operator== '+') {
    result = number1 + number2;
}

else if  (operator== '-') {
    result = number1 - number2;
}

else if( operator== '*') {
    result = number1 * number2;
}

else if( operator== '/') {
    result = number1 / number2;
}

else {
    alert(`${operator} not a valid operator`)
}

alert(`${number1} ${operator} ${number2}= ${result}`);

//For DOM
let results = document.getElementById("result");

function seeResult(){
    results.innerHTML = reult;
    console.log(result)
}
