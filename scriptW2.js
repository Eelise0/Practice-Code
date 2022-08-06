// ********************************************************* //
// SWITCH PRACTICE //
let age = 'Elderly';

switch (age) {
    case 'Elderly':
        console.log('65-100');
        break;
    case 'Middle Aged':
        console.log('40-64');
        break;
    case 'Youngin':
        console.log('20-39');
        break;
    default:
        console.log('0-19');
    
}
// ************************************************************* //
// IF ELSE STATEMENTS PRACTICE //
//Hour
//If hour is between 6am and 12pm: Good morning!
//If it is between 12pm and 6pm: Good afternoon!
//Otherwise: Good evening!

let hour = 18;

//10: if hour is greater than or equal to 6 AND less than 12
//PRINT Good morning
if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
//14: if hour is greater than 12 AND less than 18, PRINT Good afternoon
else if (hour >= 12 && hour < 18)  {
    console.log('Good afternoon');
}
//18: for any other hour after 18, PRINT goodnight
else
console.log('Goodnight');

{ let a = 3;
let b = 4;

if (a === 3 && b === 4) {
    console.log('a is 3 and b is 4');
}
//Always flatten IF statements like in line 44 if there is not divergent path
//if there must be a divergent path then use if statements like in line 49-53
if (a === 3) {
    if (b === 5) {
        console.log('a is 3 and b is 4');
    } else {
        console.log('a is 3 but b is not 4');
    }
}

let ageRequiredToDrink = 21;

let currentAge = 20;

let canPersonDrink = currentAge >= ageRequiredToDrink;

console.log(canPersonDrink);

if (canPersonDrink) {
    console.log('This person is allowed to drink Alcohol');
}   else {
    console.log('This person is not old enough to drink Alcohol');
}
// ************************************************************* //
// FOR LOOPS PRACTICE //
for (let i = 25; i < 35; i++) {
    console.log(i);
}

console.log('we have reached the highest value the FOR loop will allow');
}

//FOR loop with an IF statements asking to only show values that are EVEN up to 38//
for (let i = 18; i < 38; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log('This is the list of values between 18-38 that are even');
// if (i % 2 == 0) means that Im asking javascrip to show me 'i' when they are
//divided by 2 and have a remainder of 0...this essentially will show only even numbers.

for (let i = 14; i < 20; i++) {
    console.log(i);
}

for (let i = 5; i < 25; i++) {
    if ( i % 2 === 1) {
        console.log (i);
    }
}
console.log('Printed numbers between 5-25 that are uneven');
// ************************************************************** //
// ARRAY PRACTICE //
/*Numeric Arrays*/
let partyList = [1, 2, 3, 4, 5];
console.log(partyList);
let groceryList = new Array('Milk', 3, true, null, '5 cookies', 3.25);
console.log(groceryList);
console.log(partyList.length);
console.log(groceryList.length);
/* Associative Arrays */
let animalList = [];
animalList['Barry'] = 'Dog';
animalList['Jasmine'] = 'Cat';
animalList['Iroh'] = 'Dog';
animalList['Kenzo'] = 'Cat';
// ************************************************************** //
/* WHILE LOOPS PRACTICE */
let a = 2;
while (a < 10) {
    console.log(a);
}