1. Create Project Structure:

Create a folder named `module1`.  
Inside `module1`, create another folder named `src`.  
Inside the `src` folder, create a file named `index.ts`.

Your folder structure should look like this:

```
module1/
├── src/
│   └── index.ts
```




2. Initialize TypeScript

Open a terminal in the `module1` directory and run:  
`tsc --init`  
This command creates a `tsconfig.json` file with default settings.

3. Configure tsconfig.json  
Open `tsconfig.json` and modify the following options to match your folder structure:

```json
{
  "compilerOptions": {
    "rootDir": "./module1/src",
    "outDir": "./module1/dist"
    // "strict": true,
    // "target": "es6",
    // "module": "commonjs",
    // "esModuleInterop": true
  }
}
* rootDir tells TypeScript where the source files are.
* outDir tells it where to place the compiled JavaScript files.
* strict enables strict type-checking for better code safety.

Compile the TypeScript Code
In the terminal, run:
tsc

This will compile your index.ts file and generate a dist folder:


module1/
├── dist/
│   └── index.js
├── src/
│   └── index.ts
├── tsconfig.json



// npm i -g ts-node-dev
//ts-node-dev --respawn --transpile-only server.ts(file name)


What it does:

npm i -g means you're installing a package globally (so it can be used from anywhere on your system).
ts-node-dev is a development tool for running TypeScript files directly and automatically restarting the app when files change.

Purpose of ts-node-dev:

Runs TypeScript files without compiling them manually – like ts-node.
Watches for file changes – like nodemon, it automatically restarts the server when your code changes.
Faster restarts – it caches parts of your code, so the restarts are faster than ts-node + nodemon.