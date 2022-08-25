const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName('Elise', 'Schmidt'));

const someFunction = (a, b) => {
    let result = '';
    for (let i =0; i <a.length; i++) {
        result += a;
    }
    return result;
    }

console.log(someFunction('Elise', 3));

const pet = (species) => {
    if (species === 'dog') {
    return 'This is a dog';
    } else {
    return 'Something else'
    }
    }
console.log(pet('dog'));

const sum = (add1, add2) => add1 + add2;
console.log(sum(4,5));

