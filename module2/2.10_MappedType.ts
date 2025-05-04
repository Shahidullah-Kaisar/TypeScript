{
    // mapped types
    
    const arrOfNumbers: number[] = [1, 4, 5];
  
    // number array থেকে string array তৈরি করা হচ্ছে .map() দিয়ে
    const arrOfStrings: string[] = arrOfNumbers.map((number) =>
      number.toString()
    );
    console.log(arrOfStrings); // ['1', '4', '5']
  
    // একটি টাইপ যেখানে height এবং width নামের দুইটি প্রপার্টি আছে যেগুলোর টাইপ number
    type AreaNumber = {
      height: number;
      width: number;
    };
  
    // এটি হলো lookup type — AreaNumber টাইপ থেকে শুধু height প্রপার্টির টাইপ বের করা হচ্ছে
    type Height = AreaNumber["height"]; // height এর টাইপ হবে number
  
    // type AreaString = { //make type manually
    //   height: string;
    //   width: string
    // }

    // keyof AreaNumber => "height"|"width"
    // T => {height:string;width:number}
    // key => T["width"]

    type AreaString<T> = {         //make new type dynamically
        [key in keyof T]: T[key];
    };
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
    const area1: AreaString<{ height: string; width: number }> = {
      height: "100",
      width: 50,
    };
  
    //
  }
  