import { prisma } from "./prisma"

interface Movie {
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

type SortBy = 'title' | 'release_date' | 'vote_average';

/*
 orderBy: [{ [sortBy]: order }]
            } 
*/


export class MoviesService {
    public async getAllMovieUser(movieUserId: number, sortBy: SortBy, order: 'asc' | 'desc') {
        //console.log("je suis l'id : " + movieUserId);
        const user = await prisma.user.findUnique({
            where: {
                id: movieUserId,
            },
           select : {
                movies : {
                    orderBy : {
                        [sortBy]: order,
                    }
                }
            } 
        }
        );
        //console.log(user);
        if (!user || !user.movies) {
            throw new Error("User or movies not found");
        }

        return user.movies;
        
    }

    public async favorite(userId: number, newMovie: Movie) {
        return await prisma.movies.create({
            data: {
                title: newMovie.title,
                poster_path: newMovie.poster_path,
                overview: newMovie.overview,
                release_date: new Date(newMovie.release_date),
                vote_average: newMovie.vote_average,
                userId: userId,
            },
        })
    }

}