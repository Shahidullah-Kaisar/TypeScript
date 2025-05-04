"use strict";
{
    //Destructuring
    //Object destructuring
    const user = {
        id: 2045,
        name: {
            firstName: "Shahidullah",
            middleName: "Kaisar",
            lastName: "Sajib"
        },
        contactNo: "01700000000000",
        address: "TG"
    };
    const { address, name: { middleName } } = user;
    //array destructuring
    const myFriends = ["Rahim", "Karim", "Jarim", "Abul", "Kabul"];
    const [, , bestFriend, ...joinFriend] = myFriends;
}
/*


Object Destructuring:

const user = {
    id: 2045,
    name: {
        firstName: "Shahidullah",
        middleName: "Kaisar",
        lastName: "Sajib"
    },
    contactNo: "01700000000000",
    address: "TG"
}
Now, you use object destructuring to extract specific values:

const { address, name: { middleName } } = user;
What's happening here:

address is directly inside user, so you extract it directly.
middleName is inside the name object (which is inside user), so you access it like: name: { middleName }.

After this line:

address will be "TG"
middleName will be "Kaisar"

Array Destructuring:


const myFriends = ["Rahim", "Karim", "Jarim", "Abul", "Kabul"];
const [ , , bestFriend, ...joinFriend] = myFriends;

What's happening here:

You skip the first two friends (Rahim, Karim) using empty commas.
You assign the 3rd one ("Jarim") to bestFriend.
The rest (["Abul", "Kabul"]) go into joinFriend using the ... (spread operator).

After this line:

bestFriend will be "Jarim"
joinFriend will be ["Abul", "Kabul"]

Summary:

Object destructuring pulls out values from objects.
Array destructuring pulls out values from arrays, in order.
You can use nested destructuring and ...rest to grab remaining values.


*/ 
