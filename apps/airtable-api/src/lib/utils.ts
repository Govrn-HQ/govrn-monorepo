import { Formula } from '@qualifyze/airtable-formulator';
import { activityTypes, guilds, users } from './airtable';

const createOrGetGuildById = async (global_id: string) => {
  const guildQuery = {
    filterByFormula: ['=', { field: 'guild_id' }, global_id] as Formula,
  };

  for await (const guild of guilds.select(guildQuery)) {
    console.log('guild');
    return guild;
  }
  console.log('guild 2');
  const rep = await guilds.create({ guild_id: global_id });
  console.log('Here');
  console.log(rep);
  return rep;
};

export const createAndGetActivityType = async (
  userId: string,
  activity_name: string
) => {
  console.log(userId);
  console.log(activity_name);

  const userQuery = {
    filterByFormula: ['=', { field: 'record_id' }, userId] as Formula,
  };
  const user = await users.find(userId);
  console.log(user);
  const guild = await createOrGetGuildById(userId);
  const r = await activityTypes.create({
    guild: [guild.id],
    activity_name_only: activity_name,
  });
  console.log(r);
  return r;
};
