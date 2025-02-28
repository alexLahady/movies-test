import { prisma } from "./prisma"

//a refaire avec un unique utilisateur
export class MoviesService {
    public async getAll() {
        const results = await prisma.movies.findMany({
            where: {
               title : 'asc' //dans l'ordre
            }
        })
        return results;
    }

    public async getOne(movieId : number) {
        return await prisma.movies.findUnique({
            where: {
                id : movieId,
            },
        })
    }

}