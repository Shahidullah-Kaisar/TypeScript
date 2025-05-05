{
  // Parent class: Person
  class Person {
    name: string;
    age: number;
    address: string;

    // Constructor initializes common properties
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    // Common method shared by all who extend this class
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  // Child class: Student inherits from Person
  class Student extends Person {
    // Student doesn't add anything new, just uses parent's constructor and properties
    constructor(name: string, age: number, address: string) {
      // super() calls the constructor of the parent class
      super(name, age, address);
    }
  }

  // Creating a Student object
  const student1 = new Student("Mr. student", 20, "Uganda");
  // student1 can access getSleep() from Person class
  // student1.getSleep(8);

  // Another child class: Teacher extends Person and adds extra property & method
  class Teacher extends Person {
    designation: string; // extra property specific to Teacher

    // Teacher constructor takes an extra parameter: designation
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      // Reuse Person constructor for common properties
      super(name, age, address);
      this.designation = designation; // initialize new property
    }

    // Extra method only available to Teacher
    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  // Creating a Teacher object
  const teacher = new Teacher("Mr. teacher", 40, "Uganda", "professor");

  // teacher can access both parent and child class methods
  // teacher.getSleep(6);     // from Person class
  // teacher.takeClass(3);    // from Teacher class
}
