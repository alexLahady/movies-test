import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import userRoutes from '@routes/user'; 
import movieRoutes from '@routes/movie';
import apiRoute from '@routes/api';

import cookieParser from "cookie-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', apiRoute);
app.use('/me/movies',movieRoutes);
app.use('/users',userRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//ameliorer Prisma pour faire un model relationel puis tester