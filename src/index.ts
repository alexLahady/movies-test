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

app.get("/", (req: Request, res: Response) => {
  res.cookie('cookieName', 'alex', { maxAge: 900000, httpOnly: true });
  res.send("Express + TypeScript Server caca");
});

app.get("/", async (req: Request, res: Response) => {
  const user = [{
    id: 0,
    title: 'caca',
    overview: 'pipi caca',
    release_date: '2025-05-05',
    vote_average: 9
  }]

  res.send(user);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});