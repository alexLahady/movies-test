import { prisma } from "./prisma";
import bcrypt from 'bcrypt';


export class UsersService {
    public async getById(userId: number) {
      console.log('userId:', userId); 
        return await prisma.user.findUnique({
          where: {
            id: userId,
          },
        });
    }
    
    //améliorer pour eviter les doublons et mettre un mdp
    public async singnup(userEmail : string, userName  : string, userPassword : string){// rajouter password dans les parametres plus tard
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        const user = await prisma.user.create({
          data : {
            email: userEmail,
            password : hashedPassword,
            name : userName
          }
        })
    }

    public async login(userEmail : string, userPassword : string){// rajouter password dans les parametres plus tard
        return await prisma.user.findFirst({
            where: {
                email: userEmail,
                password: userPassword,
              },
              select: {
                id : true,
                name : true,
              },

        });
    }
}

