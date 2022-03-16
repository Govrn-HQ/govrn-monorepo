import { Formula } from '@qualifyze/airtable-formulator';
import { activityTypes, guilds, users } from './airtable';

const createOrGetGuildById = async (global_id: string) => {
  const guildQuery = {
    filterByFormula: ['=', { field: 'guild_id' }, global_id] as Formula,
  };

  for await (const guild of guilds.select(guildQuery)) {
    return guild;
  }
  const rep = await guilds.create({ guild_id: global_id });
  return rep;
};

export const createAndGetActivityType = async (
  userId: string,
  activity_name: string
) => {
  const userQuery = {
    filterByFormula: ['=', { field: 'record_id' }, userId] as Formula,
  };
  const user = await users.find(userId);
  const guild = await createOrGetGuildById(userId);
  const r = await activityTypes.create({
    guild: [guild.id],
    activity_name_only: activity_name,
  });
  return r;
};
