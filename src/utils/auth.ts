//token 

// import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: string;
}

export default (req: Request, res: Response, next: NextFunction): void => {
  try {
    // Récupérer le token depuis l'en-tête Authorization
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token manquant' }); // bug sur le return
    }

    // Vérifier et décoder le token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET') as DecodedToken;
    const userId = decodedToken.userId;

    // Ajouter l'ID de l'utilisateur à la requête
    req.auth = { // bug sur l'auth
      userId: userId,
    };

    next();
  } catch (error) {
    res.status(401).json({ error: 'Requête invalide' });
  }
};
