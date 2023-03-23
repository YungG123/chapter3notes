const readline = require('readline-sync');

//q1
function nameswapper(){
    let first = readline.question("First Name: ");
    let last = readline.question("Last Name: ");
    return(`${last}, ${first}`);
}

nameswapper();
