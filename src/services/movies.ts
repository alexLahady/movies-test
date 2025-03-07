import { prisma } from "./prisma"

//a refaire avec un unique utilisateur
export class MoviesService {
    public async getAllById(userid : number) {
        return await prisma.movies.findMany({
            where : {
                id : userid,
            }
        });
    }

    public async getOne(movieId : number) {
        return await prisma.movies.findUnique({
            where: {
                id : movieId,
            },
        })
    }

}