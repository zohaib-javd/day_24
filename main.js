"use strict";
// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function printNumbersWithLet() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbersWithLet();
console.log("\n");
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let age = 38;
age = 39;
console.log(age);
const name = "Zohaib";
try {
    name = "Javed";
}
catch (error) {
    console.log("Error: Can't reassign a `const` -declared variable.");
}
console.log("\n");
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("`blockLet is not accessible outside the block.");
}
try {
    console.log(blockConst);
}
catch (error) {
    console.log("`blockConst is not accessible outside the block.");
}
