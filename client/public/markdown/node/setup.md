# Node.js back end with TypeScript

1. Setup a Node.js project and install packages
	1. Create your back end folder (e.g. <mark>server</mark>)
	2. Create a <mark>package.json</mark>
	<pre class="command-line"><code>npm init -y</code></pre>
	3. Install types for node as a development dependency
	<pre class="command-line"><code>npm i -D @types/node</code></pre>
	4. Install TypeScript as a <mark>production</mark> dependency&mdash;you will need to build your back end in docker.
	<pre class="command-line"><code>npm i typescript</code></pre>
	5. Install nodemon so your app is refreshed whenever changes occur to your source code
	<pre class="command-line"><code>npm i -D nodemon</code></pre>
	Obviously, you can use your globally installed TypeScript compiler/nodemon. Installing TypeScript/nodemon locally ensures that these packages are available after the project is cloned.

2. Configure your Node.js project. In <mark>package.json</mark>: 
	1. Change type to "module"
	2. Add script
	```json
	{
		"type": "module",  // use ES module instead of CommonJS module
		"scripts": {
			"build": "npx tsc",   // invoke TypeScript compiler to transpile TypeScript into JavaScript
			"start": "node dist/app.mjs",   // after transpilation, run the app
			"dev": "npx tsc -w & nodemon dist/app.mjs" // watch for file changes and re-serve
		}
	}
	```

3. Setup and configure your TypeScript project.
	1. Create a tsconfig.json file:
		- Option 1: use tsc
		<pre class="command-line"><code>npx tsc --init</code></pre>
		- Option 2: create an empty <mark>tsconfig.json</mark> file manually:
		<pre class="command-line"><code>touch tsconfig.json</code></pre>
	2. Configure <mark>tsconfig.json</mark>
	```json
	{
		"compilerOptions:": {
			"module": "nodenext", // "module" option imposes limitations on what module-related input code is allowed. (e.g. 'require' is not allowed for module ES2015 or higher.) NodeNext is a new standard designed for Node's specific implementation of co-existing ES module and CommonJS module.
			"moduleResolution": "nodenext", // "moduleResolution" option determines how Node.js will find imported modules.
			"target": "esnext", // "target" option determines the version of JavaScript to which your TypeScript source code will be compiled.
			"sourceMap": true, // "sourceMap" is set to true so the compiled JavaScript code are mapped back to TypeScript, which helps us with debugging.
		},
		"include": ["src/**/*"], // tells compiler where to find TypeScript source code
	}
	```
	Please make sure that your folder structure is correct, i.e. under your server/ directory, you have src/ for TypeScript source code and dist/ for compiled JavaScript code. The defaut rootDir and outDir are './src' and './dist', respectively and they are commented out.

4. A sample /src/app.mts file 
```typescript
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import chalk from 'chalk';
// import dotenv from 'dotenv';
// dotenv.config();
import cors from 'cors';
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5001;

// 🥭 connect to MongoDB database
const MongoDB_Connection_String = "mongodb://localhost/techdoc";
async function connectToMongoDB(connectionString: string) {
    mongoose.connect(connectionString);
    console.log(chalk.bold.cyan('✌️ MongoDB database successfully connected!'));
}

try {
    await connectToMongoDB( MongoDB_Connection_String);
} catch(e) {
    console.log(chalk.bold.red(`💩 MongoDB connection failure!`, e)); 
}
// 🥭 -----------------------------

// 💻 configure server
const app = express();

// 🐫 import geo router and post router
import { router as geoValidators } from './routes/geo-validators.routes.mjs';
import { router as postRouter } from './routes/post.routes.mjs';

// 🖕 middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 🐫 use geo router and post router
app.use('/api/geo-validators', geoValidators);
app.use('/api', postRouter);

// 📐 serve angular app
app.use(express.static(path.join(__dirname, '..', 'angular', 'browser')));
app.all('/*angular', (req, res, next) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'angular', 'browser')});
});
// 💻 -----------------------------

app.listen(PORT, () => {
    console.log(chalk.bold.cyan(`✌️ Server is listening on port ${PORT}.`)); // 
});
	```
	2. Compile TypeScript into JavaScript
	<pre class="command-line"><code>npm run build</code></pre> 

	3. Run your app (assuming you have completed step 4.2 to set up scripts in package.json file)
	<pre class="command-line"><code>npm start</code></pre>


