{
    //utility types  
    
    type Person = {
      name: string;
      age: number;
      email?: string;
      contactNo: string;
    };

    // ----------------Pick ( Pick<Type, Keys> )---------------------
    type NameAge = Pick<Person, "name" | "age">; 
    // 🔹 Pick<Person, "name" | "age"> মানে Person টাইপ থেকে শুধু name আর age প্রপার্টি নিয়ে একটা নতুন টাইপ তৈরি করা হয়েছে
  
    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;
    // 🔹 Omit<Person, "name" | "age"> মানে Person টাইপ থেকে name আর age বাদ দিয়ে নতুন টাইপ ContactInfo বানানো হয়েছে
  
    // Required
    type PersonRequired = Required<Person>;
    // 🔹 Required<Person> মানে Person টাইপের সব প্রপার্টি এখন বাধ্যতামূলক (email আগেও optional ছিল, এখন আর না)
  
    // Partial
    type PersonPartial = Partial<Person>;
    // 🔹 Partial<Person> মানে Person টাইপের সব প্রপার্টি এখন optional হয়ে গেছে
  
    // Readonly
    type PersonReadonly = Readonly<Person>;
    // 🔹 Readonly<Person> মানে Person টাইপের সব প্রপার্টি এখন শুধু read-only, মানে পরে মান পরিবর্তন করা যাবে না
  
    const person1: PersonReadonly = {
      name: "Mr. XY",
      age: 200,
      contactNo: "017",
    };
  
    person1.name = "Mr. YZ";
    //টা Error দিবে কারণ Readonly টাইপে name মান পরিবর্তন করা যায় না
  
    // Record
  
    // type MyObj = {
    //   a: string;
    //   b: string;
    // };
  
    type MyObj = Record<string, number>; // <Type, Keys>
    // 🔹 Record<string, number> মানে যেকোনো string key-এর জন্য value হতে হবে number টাইপের
  
    const EmptyObj: Record<string, unknown> = {};
    // 🔹 EmptyObj হলো এমন একটা object যেখানে যেকোনো string key থাকতে পারে, আর value এর টাইপ হবে unknown
  
    const obj1: MyObj = {
      a: "aa",
      b: "bb",
      c: "cc",
      d: "dd",
      e: 6,
    };
    // এখানে a, b, c, d এর value গুলো string, কিন্তু MyObj চায় value গুলো number টাইপের হোক — তাই এটা error দিবে
  
    //
  }
  