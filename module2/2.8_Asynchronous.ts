{
    // Define a 'Todo' type to describe the structure of a todo object
    type Todo = {
      id: number;
      userId: number;
      title: string;
      completed: boolean;
    };
  
    // Async function that fetches a todo from an external API
    const getTodo = async (): Promise<Todo> => {
      // Await the response from the API call
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  
      // Await the conversion of response to JSON
      const data = await response.json();
  
      // Return the data typed as Todo
      return data;
    };
  
    // Call the getTodo function (Note: result is not being used here)
    getTodo();
  
    // Define a custom type for the simulated promise data
    type Something = { something: string };
  
    // Create a function that returns a Promise resolving to a 'Something' object
    const createPromise = (): Promise<Something> => {
      return new Promise<Something>((resolve, reject) => {
        const data: Something = { something: "something" };
  
        // Simulate success condition
        if (data) {
          resolve(data); // Resolve the promise with data
        } else {
          reject("failed to load data"); // Reject if data is missing
        }
      });
    };
  
    // Async function to call 'createPromise' and await its result
    const showData = async (): Promise<Something> => {
      const data: Something = await createPromise(); // Wait for the promise to resolve
      return data; // Return the resolved data
    };
  
    // Call the async showData function (again, result is not used here)
    showData();
  }
  

  /*
   What is Asynchronous TypeScript?
    Asynchronous TypeScript refers to using async operations like Promise, async/await, and fetch in TypeScript while taking full advantage of TypeScript’s static type-checking system.
    In real-world applications, tasks like API calls, reading files, or database operations don't complete instantly. Asynchronous code allows these tasks to run in the background without blocking the execution of the rest of your program.
    TypeScript enhances this by providing type safety for asynchronous data, helping prevent runtime errors.
  */