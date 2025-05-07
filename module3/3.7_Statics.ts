{
    // static

    class Counter {
      // static property that belongs to the class, not any object
      static count: number = 0;
  
      // static method: increases the shared count
      static increment() {
        return (Counter.count = Counter.count + 1);
      }
  
      // static method: decreases the shared count
      static decrement() {
        return (Counter.count = Counter.count - 1);
      }
    }

    // You don't need to create an instance of Counter class
    // Directly accessing static method using class name

    // const instance1 = new Counter();  // instance bananor dorkar nai, static use korbo class diye
  
    console.log(Counter.increment());   //When a method or property is declared as static, it should be accessed using the class name, not through an instance.

    // const instance2 = new Counter();
    console.log(Counter.increment()); 
    
  
    // const instance3 = new Counter();
    console.log(Counter.increment()); 
    
  
    //
  }
  