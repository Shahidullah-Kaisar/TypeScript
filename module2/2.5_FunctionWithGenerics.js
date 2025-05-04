"use strict";
{
    // function with generics
    //  Function without generics – only works with string
    const createArray = (param) => {
        return [param]; // Returns a string array
    };
    const res1 = createArray("Bangladesh"); // Output: ["Bangladesh"]
    //  Function with generics – works with any type
    const createArrayWithGeneric = (param) => {
        return [param]; // Returns an array of the same type as input
    };
    const resGeneric = createArrayWithGeneric("Bangladesh"); // Output: ["Bangladesh"]
    const resGenericObj = createArrayWithGeneric({
        id: 222,
        name: "Mr. Pashan",
    }); // Output: [{ id: 222, name: "Mr. Pashan" }]
    //  Generic function that returns a tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2]; // Returns a tuple [T, Q]
    };
    const res10 = createArrayWithTuple("Bangladesh", 222);
    // Output: ["Bangladesh", 222]
    const res11 = createArrayWithTuple("Bangladesh", {
        name: "Asia",
    });
    // Output: ["Bangladesh", { name: "Asia" }]
    //  Add additional property to any object using generic
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { // Keep original properties
            course });
    };
    const student1 = addCourseToStudent({
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
    // Output: { name: "Mr X", email: "x@gmail.com", devType: "NLWD", course: "Next Level Web Development" }
    const student2 = addCourseToStudent({
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });
    // Output: { name: "Mr Y", email: "y@gmail.com", hasWatch: "Apple Watch", course: "Next Level Web Development" }
    //
}
