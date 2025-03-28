import express from 'express';
import { MoviesService } from '@services/movies';  // Importer le service des films


const router = express.Router();
const moviesService = new MoviesService();

/*
title: 'asc', // Par ordre alphabétique
date: 'desc', // Par date décroissante (plus récent d'abord)
rating: 'desc', // Par note décroissante (meilleur d'abord)
*/

router.get('/user/:id', async (req, res) => {
    const movieId: number = parseInt(req.params.id, 10);
    const sort = req.query.sort || 'title';
    const order = req.query.order || 'asc';
    //console.log(sort,order);

    const allMovies = await moviesService.getAllMovieUser(movieId, sort as 'title' | 'release_date' | 'vote_average', order as 'asc' | 'desc');
    //console.log(allMovies);
    res.json(allMovies);
});

router.post('/:id', async (req, res) => {
    const userId: number = parseInt(req.params.id, 10);
    const movie = req.body;
    await moviesService.favorite(userId, movie);
    res.send(movie);
});



export default router;