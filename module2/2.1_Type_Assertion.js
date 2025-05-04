"use strict";
{
    //
    //Type Assertion or Type Narrowing
    // Declaring a variable with 'any' type (can hold any value)
    let anything;
    // Assigning a string value
    anything = "Shahidullah Kaisar";
    // Reassigning a number value
    anything = 233;
    // Type assertion: telling TypeScript to treat 'anything' as a string
    anything; // Now TypeScript will suggest string methods
    // Type assertion: telling TypeScript to treat 'anything' as a number
    anything; // Now TypeScript will suggest number methods
    // Function to convert kg to grams
    // Accepts a parameter 'value' which can be a string or number
    // Returns either string, number, or undefined
    const kgToGm = (value) => {
        // If the input is a string, parse it to float and convert to grams
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`; // Returns a string
        }
        // If the input is a number, directly convert to grams
        if (typeof value === 'number') {
            return value * 1000; // Returns a number
        }
    };
    // Calling the function with a number and asserting the result as number
    const result1 = kgToGm(22);
    // Calling the function with a string and asserting the result as string
    const result2 = kgToGm("22");
    try {
        // Some code that may throw an error
    }
    catch (error) {
        // Type assertion to tell TypeScript that 'error' has a 'message' property
        console.log(error.message);
    }
    //
}
/*

What is Type Assertion in TypeScript?

Type Assertion is a way to tell TypeScript:

“Trust me, I know the type of this variable better than you.”
It doesn’t change the runtime behavior, it just tells the compiler to treat a variable as a specific type.

There are two syntax styles:

// Angle-bracket syntax
let value = <string>someVar;

// 'as' syntax (preferred)
let value = someVar as string;

It’s often used when:

Working with any type
Narrowing down union types (string | number)
Accessing DOM elements
Handling errors in try-catch


*/ 
