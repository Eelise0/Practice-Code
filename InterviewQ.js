/* CLOSURES */
let myName = 'Elise'

function printName() {
    console.log(myName)
}
myName = 'Joey'

printName();

myName = 'Kate'

printName();
/************************************/

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const itsFunction = outerFunction('ok');
itsFunction('inner');