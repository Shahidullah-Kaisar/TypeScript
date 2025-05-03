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
```
* rootDir tells TypeScript where the source files are.
* outDir tells it where to place the compiled JavaScript files.
* strict enables strict type-checking for better code safety.

Compile the TypeScript Code
In the terminal, run:
tsc

This will compile your index.ts file and generate a dist folder:

```json

module1/
├── dist/
│   └── index.js
├── src/
│   └── index.ts
├── tsconfig.json

```

#npm i -g ts-node-dev
#ts-node-dev --respawn --transpile-only server.ts(file name)

#Global Installation

To install `ts-node-dev` globally so it can be used from anywhere on your system:

```bash
npm install -g ts-node-dev
What is ts-node-dev?
ts-node-dev is a development tool that helps you run TypeScript files without manual compilation, and automatically restarts your app when you make changes.

Purpose and Benefits
Run TypeScript directly – like ts-node, without needing to compile .ts files.

Auto-restart on file changes – similar to nodemon.

Faster restarts – uses caching to speed up reloads compared to ts-node + nodemon.

Example Usage:

ts-node-dev src/index.ts
This command runs your TypeScript file and restarts it automatically when your code changes.