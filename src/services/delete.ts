import { prisma } from "./prisma";

export class Delete {

    public async movieId(userId: number, title: string) {
        return await prisma.movies.findFirst({
            where: {
                userId: userId,
                title: title,
            },
            select: {
                id: true,
            }
        })
    }


    public async movieUserDelete(userId: number, title: string) {
        const movieId = await this.movieId(userId, title);
        console.log(movieId);
        try {
            return await prisma.movies.delete({
                where: {
                    id: movieId?.id, 
                },
            });
        } catch (error) {
            console.error('Error deleting movie:', error);
            throw new Error('Failed to delete movie');
        }
    }
}