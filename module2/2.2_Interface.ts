{
  // interface

  // Defining object types using type alias
  type User1 = {
    name: string;
    age: number;
  };

  // Defining object types using interface
  interface User2 {
    name: string;
    age: number;
  }

  // Extending a type alias using intersection (&)
  type UserWithRole1 = User1 & { role: string };

  // Extending an interface using 'extends' // That means the properties of the previous interface are copied into the new interface, and you can also add new properties if you want.
  interface UserWithRole2 extends User2 {
    role: string;
  }
  //output:
    /*
    {
        name: string,
        age: number,
        role: string
    }

    */

  // This is also valid: an interface extending a type alias
  interface UserWithRole2 extends User1 {
    role: string;
  }

  // Using the extended type alias
  const user1: UserWithRole1 = {
    name: "Sajib",
    age: 23,
    role: "Admin",
  };

  // You can also use the interface-based type
  const user1: UserWithRole2 = {
    name: "Sajib",
    age: 23,
    role: "Admin",
  };

  // Array with type alias
  type Roll1 = number[];

  // Array with interface using index signature
  interface Roll2 {
    [index: number]: number;
  }

  // Using interface to type an array
  const rollNumber1: Roll2 = [1, 2, 3]; // Also works with Roll1

  // Function type using type alias
  type Add1 = (num1: number, num2: number) => number;

  // Function type using interface
  interface Add2 {
    (num1: number, num2: number): number;
  }

  // Assigning a function using type alias
  const add: Add1 = (num1, num2) => num1 + num2;
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
