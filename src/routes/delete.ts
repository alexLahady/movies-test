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


router.delete('/movie', (req, res) => {
  const {userId , title} = req.body;
  console.log(userId,title);
  console.log(typeof userId, typeof title);
  deleteUtils.movieUserDelete(userId,title);
  res.status(200).json({message: 'film bien supprimé'})
})

export default router;