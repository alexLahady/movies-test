import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import userRoutes from '@routes/user'; 
import movieRoutes from '@routes/movie';
import apiRoute from '@routes/api';
import pro from '@routes/protected'
import deleteUtils from '@routes/delete';

import cookieParser from "cookie-parser";


const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Autorise uniquement les requêtes venant de ce domaine
  credentials: true,  // Permet d'envoyer des cookies
};

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corsOptions));

/*
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", 'true');
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
*/
app.use('/', apiRoute);
app.use('/pro',pro);
app.use('/me/movies',movieRoutes);
app.use('/users',userRoutes);
app.use('/delete', deleteUtils)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//ameliorer Prisma pour faire un model relationel puis tester