import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const cookieParser = require("cookie-parser");

import { UsersService } from "@services/user.js";
import { MoviesService } from "@services/movies.js";
import { title } from "process";
import { release } from "os";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
/*
app.get("/", (req: Request, res: Response) => {
  res.cookie('cookieName', 'alex', { maxAge: 900000, httpOnly: true });
  res.send("Express + TypeScript Server caca");
});
*/

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", 'true');
  res.setHeader("Access-Control-Allow-Origin", 'https://movie-test-vercel-delta.vercel.app');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get("/", async (req: Request, res: Response) => {
  const user = [{
    id: 0,
    title: 'test',
    overview: 'test vercel',
    release_date: '2025-05-05',
    vote_average: 9
  }]

  res.send(user);
});
app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;

/*
//test vercel avec ça 
{
  "version": 2,
  "builds": [
    {
      "src": "src/index.js",
      "use": "@vercel/node",
      "config": { "includeFiles": ["src/**"] }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/index.js"
    }
  ]
}
*/