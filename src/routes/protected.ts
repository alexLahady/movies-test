import auth from '@utils/auth';
import express from 'express';


const router = express.Router();


router.get('/pro',auth, async (req, res) => {
    if (!req.auth || !req.auth.userId || !req.auth.userName) {
        return res.status(400).send('User information not found');
      }
      const authUserId = req.auth.userId;
      const authName = req.auth.userName;
      const authArrayUser = [authUserId, authName];
      res.send(authArrayUser);
});

export default router;