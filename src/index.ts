import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { prisma } from "@services/prisma";

const cookieParser = require("cookie-parser");

// import { log } from "./utils/logger.ts";
import { UsersService } from "@services/user.js";
import { MoviesService } from "@services/movies.js";
import { log } from "console";


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

  // const user = await UsersService.getById(userId)
  const user = await  UsersService.getAll();
  console.log(user);

  // const userMovies = MoviesService.getByUser(userId);

  res.send(user);
});

app.get("/me/movie/create", async (req: Request, res: Response) => {
  // await UsersService.createPrismaUser(1,'al@pipi.fr');
  const allUsers = await prisma.users.findMany();
  console.log(allUsers);
  res.send(allUsers);

})
//ça ne veut pas afficher ? 
app.get("/me/movie/poster", async (req: Request, res: Response) => {
  const allUsers = await prisma.users.findMany();
  console.log(allUsers);
  res.send(allUsers);
}) 

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});