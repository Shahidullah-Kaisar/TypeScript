{
    // OOP - Class
  
    // Define a class named Animal
    class Animal {
      // Constructor initializes properties when a new object is created
      constructor(
        public name: string,    // Name of the animal
        public species: string, // Species type (e.g., dog, cat)
        public sound: string    // The sound it makes
      ) {}
  
      // Method to print the sound the animal makes
      makeSound() {
        // Normal function is used because arrow functions don’t bind 'this' correctly in class methods
        console.log(`The ${this.name} says ${this.sound}`); // The "this" keyword refers to the object that called the method..
      }
    }
  
    // Creating an object of class Animal for a dog
    const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
  
    // Creating another object of class Animal for a cat
    const cat = new Animal("Persian bhai", "cat", "meaw meaw");
  
    // Calling the method makeSound for cat
    cat.makeSound(); // Output: The Persian bhai says meaw meaw.এখানে this = cat অবজেক্ট
  }
  
  