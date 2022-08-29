import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
const updateUserActiveStatus: any  = async () => {
   await prisma.user.update({
       where:{
           address: '0xef73E4d33352FdFB3ffe20666a653BB9F4FcEEAf',
       },
       data: {
           active: true,
       },
   });
};
 
export default updateUserActiveStatus;