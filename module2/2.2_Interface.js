"use strict";
{
    // Using the extended type alias
    const user1 = {
        name: "Sajib",
        age: 23,
        role: "Admin",
    };
    // You can also use the interface-based type
    const user1 = {
        name: "Sajib",
        age: 23,
        role: "Admin",
    };
    // Using interface to type an array
    const rollNumber1 = [1, 2, 3]; // Also works with Roll1
    // Assigning a function using type alias
    const add = (num1, num2) => num1 + num2;
    // Also valid:
    // const add: Add2 = (num1, num2) => num1 + num2;
    //
}
/*
What is an Interface?
An interface in TypeScript is used to define the structure of an object. It tells TypeScript what properties an object should have and their types. It is mainly used in object-oriented patterns and supports inheritance using extends.
Type Alias vs Interface (Short Comparison)
•	type is more flexible — it can define object types, array types, function types, union and intersection types.
•	interface is limited to object shapes only.
•	type uses & to extend other types, while interface uses extends.
•	interface supports declaration merging, meaning you can declare the same interface multiple times, and TypeScript will merge them — type cannot do this.
•	Use type when you need to describe more than just object types.
•	Use interface when you’re defining object models, especially in large OOP-style systems.
Which is better?
It depends:
•	If you're working only with object structures and plan to extend or implement — go with interface.
•	If you need to define more complex structures (functions, arrays, unions, etc.) — use type alias.
Which gives cleaner code?
type alias often gives cleaner and more readable code, especially when you're dealing with:
•	Mixed structures (objects + arrays + functions)
•	Union or intersection types
•	Complex types with conditional logic

*/
