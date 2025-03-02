import express from 'express';
import { UsersService } from '@services/user';  // Importer le service des films
import jwt from "jsonwebtoken";


const router = express.Router();
const userCtrl = new UsersService();

router.get('/:id', async (req, res) => {
  const userId: number = parseInt(req.params.id, 10);
  const user = await userCtrl.getById(userId);
  res.send(user);
});

router.post('/signup', async (req, res) => {
  const { email, name, password } = req.body; // à changer
  await userCtrl.createPrismaUser(email, name);
  res.sendStatus(201);
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body; // à changer
  const user = await userCtrl.login(email, password);// rajouter password plus tard
  //res.send(user); 
  if (user != null) {
    //le cas ou le mdp existe
    //const isPasswordValid = await bcrypt.compare(password, user.password); //pour verifier le mdp
    const encodedToken = jwt.sign({ userId: user.id }, 'RANDOM_TOKEN_SECRET')
    //token avec jwt
    console.log(encodedToken);
    res.cookie('authToken', encodedToken, { maxAge: 900000, httpOnly: true });
  }
  else {
    console.log('Erreur');
  }
  res.send(user);
})

export default router;
