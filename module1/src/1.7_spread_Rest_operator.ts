{ ////Prevent Global Scope Conflict problem


//spread operator

//in array
const men1 : string[] = ['Rahim', 'Karim', 'Gorim']
const men2 : string[] = ['Abul', 'Kabul', 'Gabul']

men1.push(...men2)

//in object
const mentors1 = {
    physics: 'Rahim',
    chemistry: 'Karim',
    Math: 'Gorim'
}
const mentors2 = {
    AppliedPhysics: 'Abul',
    AppliedChemistry: 'Kabul',
    AppliedMath: 'Babul'
}

const mentorList = {
    ...mentors1,
    ...mentors2
}


//Rest operator

const goodFriend = (...friends : string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    friends.forEach((friend : string) => console.log(`Hi ${friend}`));
}
goodFriend("Rahim","Karim", "Abul");




} //Prevent Global Scope Conflict problem



/*

Spread Operator (...):

The spread operator is used to expand elements of an array or object into individual elements or properties.

In Arrays:

const men1: string[] = ['Rahim', 'Karim', 'Gorim'];
const men2: string[] = ['Abul', 'Kabul', 'Gabul'];

men1.push(...men2);

Explanation:

...men2 spreads each element from the men2 array as individual arguments into the push() method.
Without the spread operator, you'd write: men1.push('Abul', 'Kabul', 'Gabul').
So ...men2 is a shorthand for that.
After this, men1 becomes: ['Rahim', 'Karim', 'Gorim', 'Abul', 'Kabul', 'Gabul'].

Why use it?

To merge arrays or pass elements one-by-one.
Clean, readable, and avoids manual indexing.

In Objects:

const mentors1 = {
    physics: 'Rahim',
    chemistry: 'Karim',
    Math: 'Gorim'
};
const mentors2 = {
    AppliedPhysics: 'Abul',
    AppliedChemistry: 'Kabul',
    AppliedMath: 'Babul'
};

const mentorList = {
    ...mentors1,
    ...mentors2
};

Explanation:

...mentors1 and ...mentors2 spread the properties of both objects into the new object mentorList
It combines both objects into one, like merging.

Why use it?

To combine multiple objects into a single one.
If both objects have the same key, the later one overrides the earlier.

Rest Operator (...):

The rest operator is used to collect multiple values into a single array.

const goodFriend = (...friends: string[]) => {
    friends.forEach((friend: string) =>
        console.log(`Hi ${friend}`)
    );
}
goodFriend("Rahim", "Karim", "Abul");

Explanation:

...friends collects all passed arguments into a single array named friends.
So even if you pass 3 or 10 names, they all get grouped into that array.
Inside the function, you can loop through and use them as needed.

Why use it?

When you don’t know how many arguments will be passed.
Makes the function flexible and dynamic.
Useful for utility functions, logging, or combining inputs.

*/