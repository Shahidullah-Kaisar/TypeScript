"use strict";
{
    // mapped types
    const arrOfNumbers = [1, 4, 5];
    // number array থেকে string array তৈরি করা হচ্ছে .map() দিয়ে
    const arrOfStrings = arrOfNumbers.map((number) => number.toString());
    console.log(arrOfStrings); // ['1', '4', '5']
    // এখানে মূল mapped টাইপের ব্যবহার
    // এখানে আমরা generic টাইপ T-এর সব গুলো প্রপার্টি key-কে ঘুরিয়ে (map করে)
    // প্রতিটি key-এর value টাইপ (T[key]) রেখে নতুন একটি টাইপ তৈরি করছি।
    // উদাহরণস্বরূপ: যদি T হয় {height: string, width: number}
    // তাহলে এই টাইপ হবে {height: string, width: number}
    // অর্থাৎ মূল টাইপের গঠন ও টাইপ structure বজায় রেখে নতুন টাইপ বানানো হয়।
    /*
    Output:
    type AreaString<{ height: string; width: number }> = {
        height: string;
        width: number;
      }
    */
    // এখানে AreaString টাইপে T হিসেবে এমন একটি অবজেক্ট দেওয়া হয়েছে যেখানে
    // height এর টাইপ string এবং width এর টাইপ number
    const area1 = {
        height: "100",
        width: 50,
    };
    //
}
