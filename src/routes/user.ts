import express from 'express';
import { UsersService } from '@services/user';  // Importer le service des films

const router = express.Router();
const userCtrl = new UsersService;

router.get('/:id', (req, res) => {
  const userId: number = parseInt(req.params.id, 10);
  userCtrl.getById(userId);
});

router.post('/signup', (req, res) => {
  const { email, name, password } = req.body; // à changer
  userCtrl.createPrismaUser(email,name);// rajouter password plus tard
})

router.post('/login', (req, res) => {
  const { email, name, password } = req.body; // à changer
  userCtrl.login(email); // rajouter password plus tard
})

export default router;
