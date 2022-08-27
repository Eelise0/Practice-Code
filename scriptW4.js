// const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(createFullName('Elise', 'Schmidt'));


//*************** ARROW FUNCTIONS *****************/

// const someFunction = (a, b) => {
//     let result = '';
//     for (let i =0; i <a.length; i++) {
//         result += a;
//     }
//     return result;
//     }

// console.log(someFunction('Elise', 3));

// const pet = (species) => {
//     if (species === 'dog') {
//     return 'This is a dog';
//     } else {
//     return 'Something else'
//     }
//     }
// console.log(pet('dog'));

// const sum = (add1, add2) => add1 + add2;
// console.log(sum(4,5));

//*************PROMISES***************//

// doSomethingThatReturnsAPromise ()
//     .then((value) => {
//         console.log(value);
//     }). catch((err) => {
//         console.error(err);
//     });



    // let p = new Promise((resolve, reject) => {
    //     let a = 1+1
    //     if (a == 2) {
    //         resolve('Success')
    //     } else { 
    //         reject ('Failed')
    //     }
    // })

 //The first option is RESOLVE and if the resolve goes through .THEN will run in the code block below.
 //it was will pass in the message as instructed below. If the promise is not resolved it will be 
 //REJECTED. In this case the .CATCH instructions will run and pass in the message in that code block.
 //These are similar to callbacks. 

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// // })


// function createFullName(firstName, lastName) {
//     return firstName + " " + lastName;
//   }
  
// const createFullName = (firstName, lastName) => {
//     return firstName + " " + lastName;
// }


//   function doubleNumber(number) {
//     return number * 2;
//   }

//   const doubleNumber = (number) => {return number * 2;}

  
//   function getEvenNumbers(array) {
//     let evenNumbers = [];
//     for (let i of array) {
//       if (i % 2 === 0) {
//         evenNumbers.push(i);
//       }
//     }
//     return evenNumbers;
//   }

//   const getEvenNumbers = (array) => {
//     let evenNumbers = [];
//     for (let i of array) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
//   }

const customers =
    {
        name: 'Cerena',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    }
    //more customers with the same schema
    ;

const sockPurchases = (customers) => {
  let greatSocks = [];
  let add = '';
  for (i = 0; i < customers; i++) {
    if (customers.name == 'C') 
         add = add + customers[i] + ' ';
            greatSocks.push(add);
    if (typeof customers.address !== 'undefined') 
        add = add + customers[i] + ' ';
            greatSocks.push(add);
    if(customers.city === 'Peoria' && customers.state === 'AZ') 
        add = add + customers[i] + ' ';
            greatSocks.push(add);
    if(customers.membershipLevel === 'GOLD'|| customers.membershipLevel === 'PLATINUM')
        add = add + customers[i] + ' ';
            greatSocks.push(add);
    if (customers.age < 29 && customers.membershipLevel === 'SILVER')
        add = add + customers[i] + ' ';
            greatSocks.push(add);

    return greatSocks;

}}

console.log(sockPurchases(customers));