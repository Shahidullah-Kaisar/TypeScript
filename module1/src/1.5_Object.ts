// Reference Type ---> Object
{

const user:{
    readonly company: string;  //literal type
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: "Programming Hero",
    firstName: "Shahidullah",
    middleName: "Kaisar",
    lastName: "Sajib",
    isMarried: true,
}


}

/*

1. Literal Type (readonly company: string):

Literal types in TypeScript refer to specific values that a variable can hold. In your code, the company property has the readonly modifier and a specific type (string).

The readonly modifier ensures that the value of company cannot be changed after the object is initialized. This makes it immutable.

While this isn't a literal value like "Programming Hero", it ensures the property is set only once and cannot be modified later.

user.company = "New Company"; // Error: Cannot assign to 'company' because it is a read-only property.


2. Optional Type (middleName?: string)

The middleName property is marked with ?, which makes it optional. This means that when creating an object of this type, the middleName can either be provided or omitted.

In the object initialization, you've provided a value for middleName ("Kaisar"), but it could also be left out:


const userWithoutMiddleName: {
    readonly company: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
} = {
    company: "Programming Hero",
    firstName: "Shahidullah",
    lastName: "Sajib",
    isMarried: true,
};

Here, the middleName is not provided, but it's valid because the property is optional.

Summary:
Literal Type: The company property is read-only and its value cannot be modified once assigned.

Optional Type: The middleName property is optional, meaning it may or may not be present in the object.


*/