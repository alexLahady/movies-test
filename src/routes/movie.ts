import express from 'express';
import { MoviesService } from '@services/movies';  // Importer le service des films

const router = express.Router();
const moviesCtrl = new MoviesService;

router.get('/', (req, res) => {
    moviesCtrl.getAll();
});

router.get('/:id', (req, res) => {
    const movieId: number = parseInt(req.params.id, 10);
    moviesCtrl.getOne(movieId);
});



export default router;