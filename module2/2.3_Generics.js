"use strict";
{
    // Now you're using this generic type to declare different types of arrays
    // Array of numbers
    const rollNumbers = [3, 6, 8];
    // Array of strings (mentors)
    const mentors = ["Mr. X", "Mr. Y", "Mr. Z"];
    // Array of booleans
    const boolArray = [true, false, true];
    //const user: GenericArray<User> // etaw use korte parbo.jodi property onk thake tahle eivabe use korbo.
    const user = [
        {
            name: "sks",
            age: 100,
        },
        {
            name: "Kaisar",
            age: 110,
        },
    ];
    // A simple function to add two numbers
    const add = (x, y) => x + y;
    add(30, 20); // returns 50
    // Tuple of two strings
    const manush = ["Mr. X", "Mr. Y"];
    // Tuple of number and an object
    const UserWithID = [
        1234,
        { name: "persian", email: "a@gmail.com" },
    ];
}
/*

What is a Generic Type in TypeScript?
A generic type in TypeScript allows you to write reusable and flexible code components (like functions, classes, or types) that work with any data type rather than being tied to one specific type.
Where Are Generics Used?
Generics are commonly used in:
•	Arrays: Array<T> (e.g., Array<number> for number arrays)
•	Functions: To operate on multiple types while preserving the type
•	Classes and Interfaces
•	Libraries: For example, React uses generics in useState<T>()


  */ 
