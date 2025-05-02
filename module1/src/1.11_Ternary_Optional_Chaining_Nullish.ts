{

    //ternary operator || optional chaining ||| nullish coalescing

    const age = 14;

    if(age <= 15){
        console.log("Baccha");
    }
    else{
        console.log("Boro Babu");
    }

    const isAdult = age <=15 ? 'Baccha' : 'Boro Babu';
    console.log({isAdult});

    // nullish coalescing
    //Only work for null or undefined situation

    const isAuthenticated = null;
    // const isAuthenticated = " "; // doesn't work with nullish coalescing here because it's a empty string not null or undefined.


    const result1 = isAuthenticated ?? "Guest"; // nullish
    const result2 = isAuthenticated ? isAuthenticated : "Guest"; // ternary
    console.log({result1}, {result2});


    type User ={
        name : string,
        address: {
            name: string,
            road: string,
            presentAddress : string,
            permanentAddress? : string,
        }
    }

    const user : User ={
        name: "Sajib",
        address: {
            name: "TG",
            road: "Baje Road",
            presentAddress: "Dhaka",
        }
    }

    // const permanentAddress = user.address.permanentAddress;
    // console.log( {permanentAddress}); // undefined

    const permanentAddress = user?.address?.permanentAddress ?? "No permanent Address";
    console.log( {permanentAddress});



}


/*
1. Ternary Operator:
This is a shorthand for if-else statements.
----condition ? valueIfTrue : valueIfFalse----


2. Nullish Coalescing Operator (??):
This operator returns the right-hand side value only if the left-hand side is null or undefined.

const isAuthenticated = null;
const result1 = isAuthenticated ?? "Guest"; // nullish coalescing
const result2 = isAuthenticated ? isAuthenticated : "Guest"; // ternary
console.log({result1}, {result2});

Explanation:

isAuthenticated ?? "Guest" returns "Guest" because isAuthenticated is null.

If isAuthenticated = "" (empty string), ?? would not use the fallback "Guest" because "" is not null or undefined.
The ternary version isAuthenticated ? isAuthenticated : "Guest" checks for falsy values (like null, undefined, false, 0, ""), so it would return "Guest" even if isAuthenticated = "".

3. Optional Chaining and nullish (?):
This is used to safely access deeply nested properties without throwing an error if an intermediate property is undefined or null.

My code Explanation:

user?.address?.permanentAddress checks:
If user exists,

Then if user.address exists,
Then tries to get permanentAddress.

If any part is undefined, it won't throw an error, and the nullish coalescing (??) returns "No permanent Address".

*/