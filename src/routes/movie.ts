import express from 'express';
import { MoviesService } from '@services/movies';  // Importer le service des films
import auth from '@utils/auth';

const router = express.Router();
const moviesService = new MoviesService();

router.get('/', auth, async (req, res) => {
    console.log({authUserId : req.auth.userId});
    const allMovies = await moviesService.getAll();
    res.send(allMovies);
});

router.get('/:id', async (req, res) => {
    const movieId: number = parseInt(req.params.id, 10);
    const movie = await moviesService.getOne(movieId);
    res.send(movie);
});



export default router;