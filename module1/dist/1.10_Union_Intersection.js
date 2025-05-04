"use strict";
{
    const user1 = {
        name: 'Sajib',
        gender: "male",
        bloodGroup: "O+"
    };
    const fullStackDeveloper = {
        skill: ['html', 'css', 'express.js'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    };
}
/*

1. Union Types

type FrontendDeveloper = 'fakibaaj' | 'juniorDeveloper';
type FullStackDeveloper = 'frontend' | 'expertDeveloper';

type Developer = FrontendDeveloper | FullStackDeveloper;

This means:

Developer can be any one value from either FrontendDeveloper or FullStackDeveloper.
So a variable of type Developer can be:

'fakibaaj
'juniorDeveloper'
'frontend'
'expertDeveloper'

Union (|) means "either one or the other".

Example:

const dev: Developer;

dev = 'juniorDeveloper'; //valid
dev = 'expertDeveloper'; //valid
dev = 'designer';        //error (not in the union list)

Why Use Union Types?

When a value can be one of several types or values.
Helps TypeScript give better suggestions and type-checking.

User Example:

type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
    bloodGroup: 'O+' | 'A+' | 'AB+'
}
Here:

gender is a union type: can be 'male' or 'female'.
bloodGroup is a union of specific strings: 'O+', 'A+', 'AB+'.

2. Intersection Types

type FrontendDeveloper1 = {
    skill: string[],
    designation1: 'Frontend Developer'
}
type BackendDeveloper = {
    skill: string[],
    designation2: 'Backend Developer'
}

type FullStackDeveloper1 = FrontendDeveloper1 & BackendDeveloper;

This means:
FullStackDeveloper1 must include all properties from both FrontendDeveloper1 and BackendDeveloper.
Intersection (&) means "combine everything".

Example:

const fullStackDeveloper : FullStackDeveloper1 = {
    skill: ['html', 'css', 'express.js'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}

This is valid because:

It has skill[]
It has both designation1 and designation2

Why Use Intersection Types?

When an object should have combined properties from multiple types.
Good for roles like full-stack developers, multi-role users, etc.


*/ 
