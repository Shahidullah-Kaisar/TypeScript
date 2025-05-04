{
    // constraints
  
    // Define a generic function with a constraint
    // The generic type T must have 'id', 'name', and 'email' properties
    const addCourseToStudent = <
      T extends { id: number; name: string; email: string } // <-- this is the constraint
    >(
      student: T // Accepts an object of type T
    ) => {
      const course = "Next Level Web Development";
      return {
        ...student,  // Spread all properties of the student
        course,      // Add a new 'course' property
      };
    };
  
    
    // This object has all required properties (id, name, email) and one extra 'emni'
    // It satisfies the constraint, so it's allowed
    const student3 = addCourseToStudent({
      id: 44,
      name: "Mr. Z",
      email: "z@gmail.com",
      emni: "emni", // Extra properties are fine
    });
  
    
    // We explicitly define the type T with an extra property 'devType'
    // This also satisfies the constraint because it includes id, name, and email
    const student1 = addCourseToStudent<{
      id: number;
      name: string;
      email: string;
      devType: string;
    }>({
      id: 222,
      name: "Mr X",
      email: "x@gmail.com",
      devType: "NLWD",
    });
  
  
    // Similar to student3, this object has required properties and an extra one: 'hasWatch'
    const student2 = addCourseToStudent({
      id: 333,
      name: "Mr Y",
      email: "y@gmail.com",
      hasWatch: "Apple Watch",
    });
  
    
  }
  
    // Summary:
    /* The constraint ensures that any object passed to the function must include
       at least 'id', 'name', and 'email'. Extra properties are allowed.
       This makes the function flexible while still ensuring certain structure. */