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
