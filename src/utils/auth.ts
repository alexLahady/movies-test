//token 

// import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: string;
}

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authToken = req.cookies.authToken;
    console.log(authToken)
    if (!authToken) {
      return res.status(401).json({ error: 'token manquant' }); // bug sur le return
    }

    const decodedToken = jwt.verify(authToken, 'RANDOM_TOKEN_SECRET') as DecodedToken;
    const userId = decodedToken.userId;
    console.log(userId);

    // ajouter l'ID de l'utilisateur à la requête
    req.auth = { // bug sur l'auth
      userId: userId,
    };

    next();
  } catch (error) {
    res.status(401).json({ error: 'requête invalide' });
  }
};
