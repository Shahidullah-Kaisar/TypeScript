"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // Async function that fetches a todo from an external API
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        // Await the response from the API call
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        // Await the conversion of response to JSON
        const data = yield response.json();
        // Return the data typed as Todo
        return data;
    });
    // Call the getTodo function (Note: result is not being used here)
    getTodo();
    // Create a function that returns a Promise resolving to a 'Something' object
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "something" };
            // Simulate success condition
            if (data) {
                resolve(data); // Resolve the promise with data
            }
            else {
                reject("failed to load data"); // Reject if data is missing
            }
        });
    };
    // Async function to call 'createPromise' and await its result
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise(); // Wait for the promise to resolve
        return data; // Return the resolved data
    });
    // Call the async showData function (again, result is not used here)
    showData();
}
/*
 What is Asynchronous TypeScript?
  Asynchronous TypeScript refers to using async operations like Promise, async/await, and fetch in TypeScript while taking full advantage of TypeScript’s static type-checking system.
  In real-world applications, tasks like API calls, reading files, or database operations don't complete instantly. Asynchronous code allows these tasks to run in the background without blocking the execution of the rest of your program.
  TypeScript enhances this by providing type safety for asynchronous data, helping prevent runtime errors.
*/ 
