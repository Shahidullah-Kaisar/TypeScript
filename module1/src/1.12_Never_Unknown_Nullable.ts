{
    // nullable type

    const searchName = (value : string | null) =>{
        if(value){
            console.log("Searching");
        }else{
            console.log("Nothing to Search");
        }
    }
    searchName(null);

    //unkown typeof

    const getSpeedInMeterPerSeconod = (value : unknown) =>{  
        if(typeof value === "number"){         //unknown type is checked at runtime but unknown is a compile-time type in TypeScript.
            const convertedSpeed = (value * 1000)/3600;
            console.log(`The Speed is ${convertedSpeed} ms^-1`);
        }
        else if(typeof value === "string"){
            const [res, unit] = value.split('');
            console.log([res, unit]);
            const convertedSpeed = (parseFloat(res) * 1000)/3600;
            console.log(`The Speed is ${convertedSpeed} ms^-1`);
        }
        else{
            console.log("Wrong Input");
        }
    }
    getSpeedInMeterPerSeconod(25);
    getSpeedInMeterPerSeconod("23 kmh^-1");
    getSpeedInMeterPerSeconod(null);


    // never type

    const throwError = (msg: string): never =>{
        throw new Error(msg);
    }
    throwError("Vul korchis Gadha");


}


/*

1. Nullable Type (string | null
 What is it?

A nullable type is a union type that allows a variable to hold a value or null.

let name: string | null;

This means:

The variable can be a valid string like "John".
Or it can be null, which represents no value or missing value.

Why use it?

To safely represent a missing or optional value.
Helps avoid TypeError when you expect something might not exist (e.g., user input, search results, optional fields).

Common Use Cases:

Form inputs (text or empty).
Search bars (typing or clearing).
API data that might return null.


2. Unknown Type:

What is it?

unknown is a TypeScript type that means:

"I don’t know what the value is yet, but I’ll figure it out before I use it."
It is the type-safe version of any. You can assign anything to unknown, but you must check the type before using it.


Why use it?

To safely handle dynamic values like:
API responses
User input
Third-party libraries
Prevents accidental misuse of the variable.

Benefits over any:

With any, you can do anything (risky)
With unknown, TypeScript forces you to validate the type before using it (safe).

How to use:

You must narrow the type:
if (typeof value === 'string') {
  // Now TypeScript knows it's a string
}


3. Never Type:

What is it?

The never type represents a value that never occurs.

It is used in:

Functions that always throw an error.
Functions that run forever (like infinite loops).
Exhaustive type checks in advanced scenarios.

Examples of "never" functions:

function throwError(): never {
    throw new Error("Something went wrong");
}
    throw new Error("Something went wrong") means:  
    new Error("Something went wrong") → creates an Error object with a message.
    throw → throws that error and immediately stops the function or program execution.

Why use it?

To tell TypeScript that this function will not return anything ever.
Improves type safety in code that deals with errors or unexpected branches.

*/