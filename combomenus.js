const readline = require("readline-sync");

let menu = [
    'GrilledCheese: $2.00',
    'Cheeseburger: $1.30',
    'Hamburger: $1.20',
    'ChickenSandwich: $2.50'
]
console.log(`${menu}`);

let beverage = [
    'sprite',
    'pepsi',
    'CocaCola',
    'Coffee',
    'Water',
]
console.log(`${beverage}`);

let beverageSizes = [
    'small: $1.00',
    'medium: $1.75',
    'large: $2.25',
]
console.log(`${beverageSizes}`);

let answer1 = readline.question("What type of sandwich or burger would you like? \n Your Answer: ");
let answer2 = readline.question("Would you like a beverage? \n Your Answer: ");

if(answer2 == "yes"){
    let answer3 = readline.question("What beverage size would you like? \n Your Answer: ");
}
