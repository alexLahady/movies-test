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
        const user = await prisma.users.findMany();
        prisma.movies
        return user;
        // return {
        //     id: userId,
        //     nickname: "Henrymoumou",
        //     moviesIds: [2, 57]
        // }
    }
    //problème avec cette fonction ça ne veut pas creer ?
    static async createPrismaUser(userEmail : string, userName? : string){
        const user = await prisma.users.create({
          data : {
            email: userEmail,
            name : userName
          }
        })
    }
}

