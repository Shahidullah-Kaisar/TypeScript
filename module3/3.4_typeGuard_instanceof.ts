{
  // instanceof guard

  // Base class Animal
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    // Common method for all animals
    makeSound() {
      console.log("I am making sound");
    }
  }

  // Dog class extends Animal
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // Dog-specific method
    makeBark() {
      console.log(`${this.name} is barking.`);
    }
  }

  // Cat class extends Animal
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    // Cat-specific method
    makeMeaw() {
      console.log(`${this.name} is mewaing.`);
    }
  }

  // Custom type guard to check if an animal is a Dog
  const isDog = (animal: Animal): animal is Dog => { //`animal is Dog`------tells TypeScript:
                                          // “Hey, if this function returns true, you can safely treat animal as a Cat from now on.”
    return animal instanceof Dog;
  };

  // Custom type guard to check if an animal is a Cat
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  // Function to determine animal type and call corresponding method
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark(); // If it's a Dog, call makeBark
    } else if (isCat(animal)) {
      animal.makeMeaw(); // If it's a Cat, call makeMeaw
    } else {
      animal.makeSound(); // For other Animals, call makeSound
    }
  };

  // Creating a Dog instance
  const dog = new Dog("Dog Bhai", "dog");

  // Creating a Cat instance
  const cat = new Cat("Cat Bhai", "cat");

  // Call getAnimal with a Dog instance
  getAnimal(dog); // Output: Dog Bhai is barking.

  //
}
