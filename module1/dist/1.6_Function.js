"use strict";
{ //Prevent Global Scope Conflict problem
    //Normal function
    function add(num1, num2) {
        return (num1 + num2);
    }
    add(2, 2);
    //Arrow function
    const addNumber = (num1, num2) => {
        return num1 + num2;
    };
    addNumber(2, 3);
    //object ---> function ----> method
    const poorUser = {
        name: "Kaisar",
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    // map
    const arr = [1, 4, 10];
    const newArray = arr.map((elem) => elem * elem);
} //Prevent Global Scope Conflict problem
/*
Global Scope Conflict:
If you create a variable in a TypeScript file without using export or import, TypeScript treats the file like a script, not a module.

That means the variable goes into the global scope, and if you use the same variable name in another file, it can cause errors or conflicts.

Easy Fix:
To stop this from happening, just add this line at the end of your file: {}
This tells TypeScript to treat the file as a module, so your variables stay private to that file.

*/
/*

Normal Function:

function add(num1: number, num2: number): number {
    return num1 + num2;
}

What it is: A traditional function using the function keyword
Parameters: Takes two parameters num1 and num2 of type number.
Return Type: : number means this function must return a number.
Return Value: It returns the sum of num1 and num2.

Example:
add(2, 2) will return 4 (which is a number).


Arrow Function:

const addNumber = (num1: number, num2: number): number => {
    return num1 + num2;
}

What it is: A shorter syntax for writing functions, using the arrow =>.
Parameters: Also takes two numbers.
Return Type: : number → must return a number.
Return Value: Same logic as the normal function, returns num1 + num2.

Example:
addNumber(2, 3) returns 5.


Method (Function Inside Object):

const poorUser = {
    name: "Kaisar",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is : ${this.balance + balance}`;
    }
}

What it is: A method is a function defined inside an object.
Parameter: Takes one balance as a number.
Return Type: : string → must return a string.
Use of this: this.balance refers to the balance property of the object.
Return Value: Returns a string with updated balance.

Example:
poorUser.addBalance(100) returns "My new balance is : 100"

Map Method:

const arr: number[] = [1, 4, 10];
const newArray: number[] = arr.map((elem: number): number => elem * elem);

What it is: map() is an array method that loops through each element.
Function Inside Map: Takes one number elem and returns elem * elem.
Return Type of Map: Returns a new array with the squared values.

Example:
Original array: [1, 4, 10]
After map: [1, 16, 100]

*/ 
