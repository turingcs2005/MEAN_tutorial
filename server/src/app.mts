import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import chalk from 'chalk';
// import dotenv from 'dotenv';
// dotenv.config();
import cors from 'cors';
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5001;

// 💻 configure server
const app = express();

// 🖕 middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/en/');
});

// 📐 serve angular app with fallback to index.html
app.use('/en', express.static(path.join(__dirname, '..', 'angular', 'browser', 'en'), {
    fallthrough: true,
    index: 'index.html'
}));
app.use('/zh-Hans', express.static(path.join(__dirname, '..', 'angular', 'browser', 'zh-Hans'), {
    fallthrough: true,
    index: 'index.html'
}));
app.use('/zh-Hant', express.static(path.join(__dirname, '..', 'angular', 'browser', 'zh-Hant'), {
    fallthrough: true,
    index: 'index.html'
}));
// 💻 -----------------------------

app.listen(PORT, () => {
    console.log(chalk.bold.cyan(`✌️ Server is listening on port ${PORT}.`)); // 
});