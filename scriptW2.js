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
//14: if hour is greater than 12 AND less than 18, PRINT Good after
else if (hour >= 12 && hour < 18)  {
    console.log('Good afternoon');
}
//18: for any other hour after 18, PRINT goodnight
else
console.log('Goodnight');

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

let a = 3;
let b = 4;

if (a == 3 && b == 4) {
    console.log('a is 3 and b is 4');
}
//Always flatten IF statements like in line 46 if there is not divergent path
//if there must be a divergent path then use if statements like in line 46-50
if (a == 3) {
    if (b == 5) {
        console.log('a is 3 and b is 4');
    } else {
        console.log('a is 3 but b is not 4');
    }
}

let ageRequiredToDrink = 21;

let currentAge = 21;

let canPersonDrink = currentAge >= ageRequiredToDrink;

console.log(canPersonDrink);

if (canPersonDrink) {
    console.log('This person is allowed to drink Alcohol');
    } else {
    console.log('This person is not old enough to drink Alcohol');
}

