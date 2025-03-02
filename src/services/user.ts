import { prisma } from "./prisma";
import bcrypt from 'bcrypt';


export class UsersService {
    public async getById(userId: number) {
        return await prisma.users.findUnique({
          where: {
            id: userId,
          },
        });
    }
    
    //améliorer pour eviter les doublons et mettre un mdp
    public async createPrismaUser(userEmail : string, userName? : string){// rajouter password dans les parametres plus tard
        // const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.users.create({
          data : {
            email: userEmail,
            name : userName
            //password : hashedPassword;
          }
        })
    }

    public async login(userEmail : string, password : string){// rajouter password dans les parametres plus tard
        return await prisma.users.findUnique({
            where: {
                email: userEmail,
              },
              select: {
                id : true,
                //password : true,
              },

        });
    }
}

