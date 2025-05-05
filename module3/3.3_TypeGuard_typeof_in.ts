{
    // type guards
  
    // typeof --> type guard
    type Alphaneumeric = string | number; // Alphaneumeric টাইপটি string বা number হতে পারে
  
    const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
      // Check if both parameters are numbers using typeof
      if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2; // If both are numbers, add them (সংখ্যা হলে যোগফল রিটার্ন করবে)
      } else {
        return param1.toString() + param2.toString(); // If either is string, concatenate (একটা হলেও string হলে string হিসেবে যুক্ত করবে)
      }
    };
  
    const result1 = add("2", "3"); // "23", both treated as strings (string হিসেবে কনক্যাট হয়)
    console.log(result1); // Output: 23
  
    // in guard
    type NormalUser = {
      name: string; // NormalUser এর শুধু name থাকে
    };
  
    type AdminUser = {
      name: string;
      role: "admin"; // AdminUser এর name এর সাথে role property থাকে
    };
  
    const getUser = (user: NormalUser | AdminUser) => {
      // Use "in" to check if 'role' exists in the object (i.e., it's an AdminUser)
      if ("role" in user) {
        console.log(`My name is ${user.name} and my role is ${user.role}`); // Admin path (যদি role থাকে তাহলে admin হিসেবে মেসেজ দেখাবে)
      } else {
        console.log(`My name is ${user.name}`); // Normal user path (না থাকলে normal user হিসেবে মেসেজ দেখাবে)
      }
    };
  
    const normalUser: NormalUser = {
      name: "Mr. Normal Bhai", // শুধুমাত্র নাম আছে
    };
    const adminUser: AdminUser = {
      name: "Mr. Admin Bhai",
      role: "admin", // নাম ও role আছে
    };
  
    getUser(adminUser); // Calls the admin path (role থাকার কারণে Admin path চলে)


}
  