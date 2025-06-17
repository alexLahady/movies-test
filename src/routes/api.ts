import express from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import dotenv from 'dotenv';
import { console } from 'inspector';

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
    poster_path : string;
    release_date: string;
    overview: string;
    vote_average: number;
};

/*
rajotuer la partie poster path qui existait deja dans la base de l'api 
"poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
https://image.tmdb.org/t/p/w500/lbimIPTVsSlnmqSW5ngEsUxtHLM.jpg

il faut jsute rajouter le lien après w500
donc faire une modification quand on va l'enregistrer et evidemment changer la base de donné pour qu'il contient que le lien des films enregistrer
*/


router.get('/', async (req, res) => {
    try {
        let allResults: Movie[] = [];

        for (let i = 1; i <= 5; i++) {
            const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${i}`;

            const response = await axios.get(url, options);

            const filteredData = response.data.results.map((movie:Movie) => ({
                id: movie.id,
                title: movie.title,
                poster_path : "https://image.tmdb.org/t/p/w500" + movie.poster_path, //poster_path // rajouter et modifier
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

