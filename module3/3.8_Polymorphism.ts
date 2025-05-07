{
    // polymorphism
  
    // Parent class
    class Person {
      // common method for all Person types
      getSleep() {
        console.log(`I am sleeping for 8 hours per day`);
      }
    }
  
    // Student class inherits Person and overrides getSleep method
    class Student extends Person {
      getSleep() {
        console.log(`I am sleeping for 7 hours per day`);
      }
    }
  
    // Developer class also inherits Person and overrides getSleep method
    class Developer extends Person {
      getSleep() {
        console.log(`I am sleeping for 6 hours per day`);
      }
    }
  
    // This function takes a Person type (can be Person, Student, or Developer)
    // and calls its getSleep method
    const getSleepingHours = (param: Person) => {
      param.getSleep();
    };
  
    // Creating instances of different classes
    const person1 = new Person();      // 8 hours
    const person2 = new Student();     // 7 hours
    const person3 = new Developer();   // 6 hours
  
    // Calling function with different objects
    getSleepingHours(person1); // Output: I am sleeping for 8 hours per day
    getSleepingHours(person2); // Output: I am sleeping for 7 hours per day
    getSleepingHours(person3); // Output: I am sleeping for 6 hours per day
  
    // এইখানে polymorphism এর কারণে subclass গুলো তাদের নিজের override করা getSleep() ব্যবহার করছে
  
  
    // =======================
    // 2nd Example: Shape Area
    // =======================
  
    // Parent class
    class Shape {
      // default method returns 0
      getArea(): number {
        return 0;
      }
    }
  
    // Circle class inherits Shape and overrides getArea
    class Circle extends Shape {
      radius: number;
      constructor(radius: number) {
        super(); // call parent constructor
        this.radius = radius;
      }
  
      getArea(): number {
        // Formula: π * r * r
        return Math.PI * this.radius * this.radius;
      }
    }
  
    // Rectangle class inherits Shape and overrides getArea
    class Reactangle extends Shape {
      height: number;
      width: number;
  
      constructor(height: number, width: number) {
        super(); // call parent constructor
        this.height = height;
        this.width = width;
      }
  
      getArea(): number {
        // Formula: height * width
        return this.height * this.width;
      }
    }
  
    // Function to get area of any shape (polymorphic behavior)
    const getShapeArea = (param: Shape) => {
      console.log(param.getArea());
    };
  
    // Creating objects
    const shape1 = new Shape();             // 0
    const shape2 = new Circle(10);          // π * 10^2 = 314.16...
    const shape3 = new Reactangle(10, 20);  // 10 * 20 = 200
  
    // Only calling with shape3 here
    getShapeArea(shape3); // Output: 200
  
    // shape2 or shape1 use korle respective getArea output dibe
  
    //
  }
  