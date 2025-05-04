{
  // function with generics

  //  Function without generics – only works with string
  const createArray = (param: string): string[] => {
    return [param]; // Returns a string array
  };
  const res1 = createArray("Bangladesh"); // Output: ["Bangladesh"]


  //  Function with generics – works with any type
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param]; // Returns an array of the same type as input
  };
  const resGeneric = createArrayWithGeneric<string>("Bangladesh"); // Output: ["Bangladesh"]


  //  Using generics with custom type
  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  }); // Output: [{ id: 222, name: "Mr. Pashan" }]

  //  Generic function that returns a tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2]; // Returns a tuple [T, Q]
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  // Output: ["Bangladesh", 222]
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });
  // Output: ["Bangladesh", { name: "Asia" }]

  
  //  Add additional property to any object using generic
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student, // Keep original properties
      course, // Add course
    };
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
