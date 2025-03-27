import express from 'express';
import { Delete } from '@services/delete';

const router = express.Router();
const deleteUtils = new Delete();

router.post('/logout', (req, res) => {
    res.clearCookie('authToken', {
      path: '/',
      httpOnly: false, 
      secure: true, 
      sameSite: 'none', 
    });
    res.status(200).json({ message: 'Utilisateur déconnecté' });
  });

export default router;