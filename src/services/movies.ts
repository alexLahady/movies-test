import { prisma } from "./prisma"

export class MoviesService {
    public static getAll() {
        return [{
            id: 46,
            title: "Avatar - Voie de l'eau"
        },
        {
            id: 84,
            title: "Avatar - The last Airbender"
        },]
    }

    public static async getOne() {
        const oneMovie =  await prisma.movies.findFirst();
        return oneMovie;
    }

    public static getByUser(userId: string) {
        return {
            id: 84,
            title: "Avatar - The last Airbender"
        }
    }
}