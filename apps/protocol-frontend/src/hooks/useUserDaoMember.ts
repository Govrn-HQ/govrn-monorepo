import { useUser } from "../contexts/UserContext";


export const useUserDaoMember = (daoId: string): boolean | undefined => {
  const { userDaos } = useUser();
  if (userDaos !== null && daoId !== undefined) {
    return userDaos.map(dao => dao.guild_id).includes(parseInt(daoId));
  }
};
