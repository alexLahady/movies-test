import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const cookieParser = require("cookie-parser");

import { log } from "./utils/logger.ts";
import { UsersService } from "@services/user.js";
import { MoviesService } from "@services/movies.js";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.cookie('cookieName','alex', { maxAge: 900000, httpOnly: true });
  res.send("Express + TypeScript Server caca");
});

app.get("/me/movies", async (req: Request, res: Response) => {
  console.log(req.cookies.cookieName);
  // Récupération utilisateur userId

  // """Vient""" du cookie
  const userId = '42';

  const user = await UsersService.getById(userId)

  // const userMovies = MoviesService.getByUser(userId);

  res.send(user);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});