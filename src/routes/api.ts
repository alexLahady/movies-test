import express from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

const apiKey = process.env.API_KEY;

const options: AxiosRequestConfig = {
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + apiKey
    }
};

router.get('/', (req, res) => {
    axios
        .get(url, options)
        .then(response => {
            // Filtrer les données pour ne garder que l'essentiel
            const filteredData = response.data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                overview: movie.overview,
                vote_average: movie.vote_average, 
            }));
            //console.log(filteredData);
            res.send(filteredData);
            //console.log(response.data)
            //res.send(response.data);
        })


        .catch(error => {
            console.log(error);
        })
})

export default router;

//axe d'amélioration
/*
pour afficher plus de 20 éléments on fera :
 - une fonction url qui sera une boucle sur la partie 'page'
 - améliorer la route pour afficher au moins 100 élément avec la nouvelle fonction url 
*/