"use strict";
{
    // 🔹 Readonly<Person> মানে Person টাইপের সব প্রপার্টি এখন শুধু read-only, মানে পরে মান পরিবর্তন করা যাবে না
    const person1 = {
        name: "Mr. XY",
        age: 200,
        contactNo: "017",
    };
    person1.name = "Mr. YZ";
    // 🔹 Record<string, number> মানে যেকোনো string key-এর জন্য value হতে হবে number টাইপের
    const EmptyObj = {};
    // 🔹 EmptyObj হলো এমন একটা object যেখানে যেকোনো string key থাকতে পারে, আর value এর টাইপ হবে unknown
    const obj1 = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
        e: 6,
    };
    // এখানে a, b, c, d এর value গুলো string, কিন্তু MyObj চায় value গুলো number টাইপের হোক — তাই এটা error দিবে
    //
}
