/* ARRAYS PRACTICE */

// let customerNames = [];
// customerNames.push('Elise Schmidt');
// customerNames.push('Ryan Joseph');
// customerNames.push('Justine Anderson');

// for (let i = 0; i < customerNames.length; i++) {
//     console.log(customerNames[i]);
// }

// for (name of customerNames) {
//     console.log(name);
// }

/* FUNCTIONS PRACTICE */

// function myFunction () {
//     for (let i = 0; i < 100; i++) {
//         console.log(i);
//     }
// }
// myFunction();

// firstName&lastName are placeholders/perameters
//function names should be verbs because something is putting into action

// function createFullName(firstName, lastName) { 
//     console.log(firstName + ' ' + lastName);
// }
// createFullName ('Elise', 'Schmidt');
// createFullName ('Ryan', 'Joseph');

// function dogs(name) {
//     console.log('Hello ' + name);
// }
// dogs('Barry');
// dogs('Bolt');

/* INTERMEDIATE ARRAY METHODS */

// let names = ['Elise', 'Ryan', 'Justine', 'George'];
// let lengths = names.map(function(element) {
//     return element.length;
// });
// console.log(lengths);
/* MAP is used to call a function, iterate the array and
and creates a new array from the old one. names array is the names
and this is used to make the lengths array */
 
// let sum = lengths.reduce(function(accumulater, currentValue) {
// //     return accumulater + currentValue;
// // });
// // console.log(sum);

// let array1 = [1, 5, 6, 9, 10, 14];

// // print the 3rd element in array1
// console.log(array1[2]);

// // print the last element in array1
// console.log(array1[array1.length-1]);

// // add 16 and 3 to array1
// array1.push(16 , 3);
// console.log(array1);

// // sort the array, then print the 3rd element again
// // did it change?
// array1.sort();
// console.log(array1[2]);

// // create a variable called myTodoList that holds an empty array
// let myTodoList = [];

// // add three todo items to the array using a built-in array method
// myTodoList.push('Laundry','Grocery Shop', 'Walk the Dogs');

// // remove the second item in the array
// myTodoList.splice(1,1);
// console.log(myTodoList);

// // create another array, yourTodoList, and add two todo items
// let yourTodoList = ['Go to School', 'Pay the mortgage'];


// // create another array, ourTodoList
// // combine myTodoList and yourTodoList into ourTodoList
// let ourTodoList = myTodoList.concat(yourTodoList);
// console.log(ourTodoList);

// // sort the following array from Z-A
// ourTodoList.sort();
// console.log(ourTodoList);

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
function reverse(parameter) {
    console.log(typeof parameter);
    if(typeof parameter == "boolean") {
        return !parameter;
       }   else if (typeof parameter == "number" || typeof parameter == "string") {
            console.log('here', typeof parameter == 'number') 
            if (typeof parameter == 'number') {
                parameter = '' + parameter
            }
                let splitParameter = parameter.split('');

                let reverseParameter = splitParameter.reverse();

                let joinParameter = reverseParameter.join('');

            return joinParameter;
                               
       }    else if (typeof parameter == "array") {
            return !parameter;
       }
       return 'Did not recognize input!';
}
console.log(reverse(false));
console.log(reverse('HI everyone!'));
console.log(reverse(45678));
console.log(reverse(array2 = [8, 9, 4, 2]));

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine() {
    let sum = 0;
    
}
function isBlue(var1){
    return var1.toLowerCase() == "blue";
}
console.log(isBlue('BLUE'));

// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin