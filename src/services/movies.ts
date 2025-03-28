import { prisma } from "./prisma"

interface Movie {
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

//a refaire avec un unique utilisateur
export class MoviesService {
    public async getAllMovieUser(movieUserId : number) {
        const user = await prisma.user.findUnique({
            where : {
                id : movieUserId,
            },
             select : {
                movies : true,
            }
        });
        
        if (!user || !user.movies) {
            throw new Error("User or movies not found");
        }

        return user.movies;
    }

    public async favorite(userId : number, newMovie : Movie ) {
        return await prisma.movies.create({
            data: {
                title: newMovie.title,
                overview: newMovie.overview,
                release_date: new Date(newMovie.release_date),
                vote_average: newMovie.vote_average,
                userId: userId, 
            },
        })
    }

}