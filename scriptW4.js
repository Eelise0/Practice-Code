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