"use strict";
{
    const student1 = {
        name: "Kaisar",
        age: 55,
        gender: "male",
        contactNo: "01788888888888",
        address: "TG"
    };
    const student2 = {
        name: "Sajib",
        age: 25,
        gender: "male",
        address: "Bd"
    };
    const userName = "Kaisar";
    const isAdmin = true;
    const add = (num1, num2) => num1 + num2;
}
/*

What is a Type Alias in TypeScript?
A type alias allows you to give a name to a type. Instead of writing the full type every time, you can define it once and reuse it by name.

type Student = {
    name: string,
    age: number,
    gender: string,
    contactNo?: string, // optional
    address: string
}
You created a type alias called Student that describes the shape of a student object.

Now you use it like this:

const student1: Student = { ............ }
const student2: Student = { ............ }

Why this is useful:

You don't have to repeat the full object structure every time.
It makes your code cleaner, reusable, and easier to update.
If you want to change the structure later (e.g., add a department field), you only change it once in the Student type.

*/ 
