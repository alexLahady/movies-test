import express from 'express';
import { MoviesService } from '@services/movies';  // Importer le service des films


const router = express.Router();
const moviesService = new MoviesService();

router.get('/user/:id', async (req, res) => {
    //console.log({authUserId : req.auth.userId});
    const movieId: number = parseInt(req.params.id, 10);
    console.log(movieId);
    const allMovies = await moviesService.getAllMovieUser(movieId);
    console.log(allMovies);
    res.json(allMovies);
});

router.post('/:id', async (req, res) => {
    const userId: number = parseInt(req.params.id, 10);
    const movie = req.body;
    await moviesService.favorite(userId, movie);
    res.send(movie);
});



export default router;