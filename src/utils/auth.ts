//token 

// import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

interface DecodedToken {
  userId: number;
  userName : string;
}

export default (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authToken = req.cookies.authToken;
    console.log(authToken)
    if (!authToken) {
      res.status(401).json({ error: 'token manquant' }); // bug sur le return
      return; 
    }

    const decodedToken = jwt.verify(authToken, 'RANDOM_TOKEN_SECRET') as DecodedToken; //bug
    const userId = decodedToken.userId;
    const userName = decodedToken.userName;
    console.log(userId);

    // ajouter l'ID de l'utilisateur à la requête
    req.auth = { // bug sur l'auth
      userId: userId,
      userName : userName,
    };

    next();
  } catch (error) {
    res.status(401).json({ error: 'requête invalide' });
  }
};
