"use strict";
{
    /**
     * Generic function that retrieves a property value from an object
     * X is a generic type representing the object
     * Y is a type that extends keyof X, meaning it must be one of the keys of X
     * This ensures at compile time that you can only pass valid keys of the object.
     */
    const getPropertyValue = (obj, key) => {
        return obj[key]; // Returns the value corresponding to the key from the object
    };
    // Define an object 'user' with three properties
    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg",
    };
    // Another object 'car' with two properties
    const car = {
        model: "Toyota 100",
        year: 200,
    };
    const result1 = getPropertyValue(car, "model");
    /**
     *  This call is valid because:
     * - 'car' matches the type X
     * - 'model' is a key of car, so it satisfies Y extends keyof X
     *
     * So 'result1' will be of type string (the type of car.model)
     */
    // Example:
    // getPropertyValue(user, "age"); returns 26
    // getPropertyValue(user, "name"); returns "Mr. persian"
    // getPropertyValue(user, "email"); ❌Error: 'email' is not a key of 'user'
    /*Summary:
     - keyof extracts the keys of a type and creates a union type
     - 'Y extends keyof X' means we can only use valid keys of the given object
     - The function becomes reusable and type-safe */
}
