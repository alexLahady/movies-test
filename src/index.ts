import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import userRoutes from './routes/user'; 
import movieRoutes from './routes/movie';
import apiRoute from './routes/api';
import pro from './routes/protected'
import deleteUtils from './routes/delete';

import cookieParser from "cookie-parser";

const cors = require('cors');

const allowedOrigins = [
  'https://movie-test-vercel-delta.vercel.app',
];

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Autoriser
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};



dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000; //quand je fais npm run dev

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log('Requête 2 depuis :', req.headers.origin);
  next();
});


app.use('/', apiRoute);
app.use('/pro',pro);
app.use('/me/movies',movieRoutes);
app.use('/users',userRoutes);
app.use('/delete', deleteUtils)

//npm run dev

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


export default app;
//ameliorer Prisma pour faire un model relationel puis tester

