import { prisma } from "./prisma";
// import bcrypt from 'bcrypt'; // marche pas utiliser require en attendant
const bcrypt = require('bcrypt');

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

    public async login(userEmail : string){// rajouter password dans les parametres plus tard
        const user = await prisma.users.findUnique({
            where: {
                email: userEmail,
              },
              select: {
                id : true,
                //password : true,
              },
        });

        if(user != null) {
            //le cas ou le mdp existe
            // const isPasswordValid = await bcrypt.compare(password, user.password); //pour verifier le mdp
            //token avec jwt
            return user;
        }
        else{ 
            console.log('Erreur');
        }

    }
}

