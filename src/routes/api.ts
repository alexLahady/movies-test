import express from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const apiKey = process.env.API_KEY_MOVIEDB;

const options: AxiosRequestConfig = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + apiKey
    }
};

type Movie = {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    vote_average: number;
};

router.get('/', async (req, res) => {
    try {
        let allResults: Movie[] = [];

        for (let i = 1; i <= 5; i++) {
            const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${i}`;

            const response = await axios.get(url, options);

            const filteredData = response.data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                overview: movie.overview,
                vote_average: movie.vote_average,
            }));

            // Permet d'ajouter que la valeur du tableau quand un tableau est deja créer 
            // et peu rajouter par dessus comme un push sans qu'il devient un tableau
            allResults = allResults.concat(filteredData);
            //console.log(allResults);
        }

        res.send(allResults);
    } catch (error) {
        console.error("Erreur API TMDB :", error);
        res.status(500).send("Erreur de récupération des films");
    }
});


export default router;

//axe d'amélioration
/*
pour afficher plus de 20 éléments on fera :
 - une fonction url qui sera une boucle sur la partie 'page'
 - améliorer la route pour afficher au moins 100 élément avec la nouvelle fonction url 
*/

