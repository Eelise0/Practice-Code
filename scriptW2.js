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
/* NESTED IF STATEMENT ************************/
let num1 = 2; 
let num2 =2; 
let num3 = 2; 
let num4 = 2;
if (num1 >= num2) {
    if (num3 >= num4) {
       console.log('Both statements are true.');
}   else {
       console.log('The first statement is true, but the second is not.')
}
}
   console.log('Program ended.');
/* ********************************************/

let ageRequiredToDrink = 21;

let currentAge = 20;

let canPersonDrink = currentAge >= ageRequiredToDrink;

console.log(canPersonDrink);

if (canPersonDrink) {
    console.log('This person is allowed to drink Alcohol');
}   else {
    console.log('This person is not old enough to drink Alcohol');
}
/*********************************************/
if (numberGrade >= 90) {
        console.log(letterGrade = 'A');
}   else if (numberGrade <= 89 && numberGrade >= 80) {
        console.log(letterGrade = 'B');
}   else if (numberGrade < 80 && numberGrade >= 70) {
        console.log(letterGrade = 'C');
}   else if (numberGrade < 70 && numberGrade >= 60) {
        console.log(letterGrade = 'D');
}   else {
    console.log(letterGrade = 'F');
}
/* When comparing my code above and the recommended code below, 
you can see there are many places I could have saved time and energy. They
both work the same but I did more work that necessary. Firstly, I did not need
to use console.log everytime, just letterGrade = '' would be fine. Also, I did 
not realize that the code would not repeat itself so I did not need to be so specific 
when declaring the else if statements. This problem was from Mastery Week 2 */

if(numberGrade >= 90){
    letterGrade = 'A';
} else if(numberGrade >= 80){
    letterGrade = 'B';
} else if(numberGrade >= 70){
    letterGrade = 'C';
} else if(numberGrade >= 60){
    letterGrade = 'D';
} else {
    letterGrade = 'F';
}

console.log(letterGrade);
/*******************WEEK 2 MASTERY CLASS QUESTION************************/
if (num1 < num2) {
    console.log(num1);
}   else if (num1 > num2) {
    console.log(num2) ;
}   else if (num2 > num1) {
    console.log(num1);
}   else if (num2 < num1) {
    console.log(num2);
}   else {
    console.log('same');
}
/****ABOVE IS MY CODE, IT WORKED FINE BUT THE ONE BELOW WAS THE INSTRUCTOR CODE,
 IT SEEMS IM MAKING IT MORE COMPLEX THAN NECESSARY. THEY BOTH DO THE SAME THING *****/
if(num1 == num2){
    console.log("same");
}
else if(num1 < num2){
    console.log(num1)
} else {
    console.log(num2)
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

/**** FOR LOOPS FROM WEEK 2 MASTERY********************************* */

for (let i = num; i === num;) {
    console.log(i + ' x 1 = ' + i*1);
    console.log(i + ' x 2 = ' + i*2);
    console.log(i + ' x 3 = ' + i*3);
    console.log(i + ' x 4 = ' + i*4);
    console.log(i + ' x 5 = ' + i*5);
    console.log(i + ' x 6 = ' + i*6);
    console.log(i + ' x 7 = ' + i*7);
    console.log(i + ' x 8 = ' + i*8);
    console.log(i + ' x 9 = ' + i*9);
    console.log(i + ' x 10 = ' + i*10);
    break;
}

/****ABOVE IS MY CODE, IT WORKED FINE BUT THE ONE BELOW WAS THE INSTRUCTOR CODE,
 IT SEEMS IM MAKING IT MORE COMPLEX THAN NECESSARY. THEY BOTH DO THE SAME THING *****/

 for(var i=1; i<=10; i++) {
    console.log(num +" x " + i + " = " + (num*i) );
}

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
let a = 200;

 while (a < 10) {
   console.log(a);
} 
do {

    console.log(a);

} while (a < 10)

let i = 10;

do {

  i++;

  console.log(i);

} while (i < 3);
/**** WHILE LOOPS FROM WEEK 2 MASTERY*********************************/

while (countDown < 3 || countDown > 10) {
    console.log('We have lift off!');
    countdown + 1;
}

while    (countDown <= 10 && countDown >= 1) {
    console.log(countDown + '...');
    --countDown; 
}
    console.log('We have lift off!');

/* INSTRUCTOR ANSWER BELOW; RESULT WAS SAME BUT THEIR CODE WAS MUCH MORE SIMPLIFIED */
if (countdown <= 10 && countdown >= 3) {
    while (countdown >= 1) {
        console.log(countdown + "...");
        countdown--;
    }
}

console.log("We have lift off!");
/**** WHILE LOOPS FROM WEEK 2 MASTERY********************************* */

while (currentCupsOfRice < requiredCupsOfRice) {
    currentCupsOfRice++;
    console.log('The bowl contains' + ' ' + currentCupsOfRice + ' ' + 'cups of rice.');
}
console.log('We have enough rice!');

/* INSTRUCTOR ANSWER BELOW; RESULT WAS SAME BUT THEIR CODE WAS SIMPLIFIED */

while(currentCupsOfRice != requiredCupsOfRice){
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');
/**** DO LOOPS FROM WEEK 2 MASTERY********************************* */

do {
    console.log(userNumber);
    userNumber += 6;
}   while (userNumber <= 100);

/* INSTRUCTOR ANSWER BELOW; RESULT WAS SAME */

do {
    console.log(userNumber);
    userNumber = userNumber + 6;
} while(userNumber <= 100);

/************************************************************** */
/* USER INPUT PRACTICE */
let name = prompt('What is your name?');
    alert('Welcome' + ", " + name );

let username = prompt('Username: ');
let password = prompt('Password: ');

if (username === 'Elise76' && password === 'doggie2') {
    alert('Welcome Back, ' + username);
 } else {
    alert('Incorrect Credentials, Try again');
 }
 /*************************/
 let loggedIn = false;

 while (!loggedIn) {
    let username = prompt('Username: ');
    let password = prompt('Password: ');

if (username === 'Elise76' && password === 'doggie2') {
        alert('Welcome Back, ' + username);
    loggedIn = true;
} else {
    alert('Incorrect Credentials, Try again');
    }
 }