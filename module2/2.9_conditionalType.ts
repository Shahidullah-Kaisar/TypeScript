{
    // conditional type
    
    type a1 = number; // a1 টাইপ হিসেবে number
    type b1 = string; // b1 টাইপ হিসেবে string
  
    // যদি a1 null টাইপের হয়, তাহলে true, না হলে false রিটার্ন করবে
    type x = a1 extends null ? true : false; // এখানে x হবে false
  
    // যদি a1 null হয় তাহলে true
    // না হলে b1 undefined হলে undefined
    // আর না হলে any টাইপ হবে
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
    // এখানে y হবে any, কারণ a1 null না, আর b1 ও undefined না
  
    // একটা অবজেক্ট টাইপ তৈরি করলাম যার মধ্যে বিভিন্ন বাহনের নাম আছে
    type Sheikh = {
      bike: string;
      car: string;
      ship: string;
      plane: string;
    };
  
    // keyof Sheikh দিলে আমরা পাবো: "bike" | "car" | "ship" | "plane"
    // মানে এই অবজেক্টের কী গুলো
  
    // এই ফাংশনাল টাইপটি চেক করে দেখবে — T নামের টাইপটা Sheikh এর key হলে true, না হলে false
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  
    // এখন আমরা CheckVehicle দিয়ে চেক করলাম 'plane' শেখ এর প্রপার্টি কিনা
    type HasPlane = CheckVehicle<"plane">; // এটি true হবে কারণ 'plane' শেখ অবজেক্টে আছে
  }
  
/*
What is a Conditional Type in TypeScript?

A conditional type in TypeScript allows you to create types based on a condition. It follows this syntax:
T extends U ? X : Y

This means:
If type T can be assigned to type U, then the type will be X, otherwise it will be Y.
It is useful for writing dynamic, type-safe logic in TypeScript.

*/