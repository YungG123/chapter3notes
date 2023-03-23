// //parameters are placeholder variables that allow us to
// //ueuse function.
//
// //Example 1: without parameters
// function printYes() {
//     console.log("Yes")
// }
//
// printYes();
// printYes();
// printYes();
//
// //Example 2: with parameter
// function printText(Text){
//     console.log(text)
// }
//
// printText("Happy Thursday")
// printText("Tomorrow is friday!")
//
// //return statements provide values to the rest of the program
// //returned values can be used by other parts of the code
// //console.log does not return values for the rest of your code
//
// //Example 3: without return
// function double(n) {
//     console.log(n*2);
// }
//
// double(21);
// double(56);
// double(3);

//Example 4: with Return
function triple(n){
    return(n*3);
}

let lives = triple(3);
lives -=1;
lives +=2;
console.log(lives);

console.log(triple(2));

//scope is the part of the program where the bindingt(value of
//a variable) is visible.
//Global scope: created outside {}, accessible everywhere
//Local scope: created inside specific {}, accessible only there

//Example 5: Different Scopes
let x=10; //global x
if (x>1){
    let y=20; //local y
    let z=30; //local z
    console.log(x+y+z);
}
console.log(x);

//Example 6: No Naming Conflict
function half(n){
    return (n/2)
}
let n=10; //global n
console.log(half(100));
console.log(n);

