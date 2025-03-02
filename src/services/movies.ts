import { prisma } from "./prisma"

//a refaire avec un unique utilisateur
export class MoviesService {
    public async getAll() {
        return await prisma.movies.findMany();
    }

    public async getOne(movieId : number) {
        return await prisma.movies.findUnique({
            where: {
                id : movieId,
            },
        })
    }

}