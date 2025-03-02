import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import userRoutes from './routes/user' //@ ne marche pas trouver pourquoi plus tard 
import movieRoutes from './routes/movie'; //@ ne marche pas trouver pourquoi plus tard 

import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.cookie('cookieName','alex', { maxAge: 900000, httpOnly: true });
  res.send("Express + TypeScript Server caca");
});

// app.get("/me/movie", async (req: Request, res: Response) => {
  // console.log(req.cookies.cookieName);
  // Récupération utilisateur userId
  //const userId = '42';
  //res.send(userId);
// });

app.use('/me/movies',movieRoutes);
app.use('/users',userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//ameliorer Prisma pour faire un model relationel puis tester