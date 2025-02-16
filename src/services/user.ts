import { prisma } from "./prisma"

export class UsersService {
    public static getAll() {
        return [{
            id: 2,
            nickname: "Herymoumou"
        },
        {
            id: 57,
            title: "Nguyinh"
        },]
    }

    static async  getById(userId: string) {
        const user = await prisma.user.findFirst();
        return user;
        // return {
        //     id: userId,
        //     nickname: "Henrymoumou",
        //     moviesIds: [2, 57]
        // }
    }
}

