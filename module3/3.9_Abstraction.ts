{
    // abstraction : 1. interface 2. abstract
  
    // ===== Interface Example =====
  
    // Interface শুধুমাত্র কাঠামো (structure) define করে
    interface Vehicle1 {
      startEngine(): void;
      stopEngine(): void;
      move(): void;
    }
  
    // বাস্তব class যা Interface এর সব method implement করে
    class Car1 implements Vehicle1 {
      startEngine(): void {
        console.log(`I am starting the car engine`);
      }
      stopEngine(): void {
        console.log("I am stopping the car engine");
      }
      move(): void {
        console.log(`I am moving the car`);
      }
  
      // Extra method, interface এর অংশ না
      test() {
        console.log(`I am just testing`);
      }
    }
  
    // একটা instance তৈরি করে method call করা হচ্ছে
    const toyotaCar = new Car1();
    toyotaCar.startEngine(); // Output: I am starting the car engine
  
    // ===== Abstract Class Example =====
  
    // Abstract class partially implement করে বা শুধু idea দেয়
    abstract class Car2 {
      abstract startEngine(): void; // only method signature
      abstract stopEngine(): void;
      abstract move(): void;
  
      // একটা বাস্তব method
      test() {
        console.log(`I am just testing`);
      }
    }
  
    // Subclass Car2 কে inherit করে এবং সব abstract method implement করে
    class ToyotaCar extends Car2 {
      startEngine(): void {
        console.log("I am starting the car  engine");
      }
      stopEngine(): void {
        console.log("I am stopping the car engine");
      }
      move(): void {
        console.log("I am moving  the car");
      }
    }
  
    // Abstract class থেকে সরাসরি object তৈরি করা যাবে না
    // const hondaCar = new Car2(); // এটা error দিবে
  
    //
  }
  