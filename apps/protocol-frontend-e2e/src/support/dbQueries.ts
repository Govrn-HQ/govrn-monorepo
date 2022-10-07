import queryDB from "./db";
import { JSONObject,
    GuildUserObjectType,
    GuildContributionObjectType 
} 
from "./index";




export const create_user = (userData: JSONObject) => {
    const  query = `
    INSERT INTO "User" (name, address, chain_type_id, active, email )
    VALUES ('${userData.username}', '${userData.address}', ${userData.chain_type_id}
      , ${userData.active}, '${userData.email}'
    )
    ON CONFLICT DO NOTHING;
    `
    return queryDB(query)
};

export const create_chainType = (name: string) => {
    const  query = `
    INSERT INTO "ChainType" (name)
    VALUES ('${name}')
    ON CONFLICT DO NOTHING;
    `
    return queryDB(query)
};

export const create_guild = (guild_name: string) => {
    const  query = `
    INSERT INTO "Guild" (name)
    VALUES ('${guild_name}')
    ON CONFLICT DO NOTHING;
    `
    return queryDB(query)
};

export const create_contribution = (contributionData: JSONObject) => {
    const statusID = 1  
    const query= `
    INSERT INTO "Contribution" (name, status_id, activity_type_id, user_id, date_of_engagement, details, proof)
        VALUES ('${contributionData.name}',${statusID} , ${contributionData.activityTypeID}, ${contributionData.userID}, 
        current_timestamp, '${contributionData.details}', '${contributionData.proof}')
    ON CONFLICT DO NOTHING;
    `
    return queryDB(query)
};

export const create_GuildContribution = (ObjectData: GuildContributionObjectType) => {
    const  query = `
    INSERT INTO "GuildContribution" (guild_id, contribution_id)
    VALUES (${ObjectData.guildID}, ${ObjectData.contributionID});
    `
    return queryDB(query)
};

export const create_MintedContribution = (contributionData: JSONObject) => {
    const statusID = 2
    const query = `
    INSERT INTO "Contribution" (name, status_id, activity_type_id, user_id, date_of_engagement, details, proof )
      VALUES ('${contributionData.name}',${statusID} ,${contributionData.activityTypeID}, ${contributionData.userID}, current_timestamp,
       '${contributionData.details}', '${contributionData.proof}'
      );
    `
   return queryDB(query)
};

export const create_GuildUser = (GuildUserObject: GuildUserObjectType) => {
    const  query = `
    INSERT INTO "GuildUser" (user_id, guild_id)
    VALUES (${GuildUserObject.userID}, ${GuildUserObject.guildID});
    `
    return queryDB(query)
};

export const delete_guild = (guild_name: string) => {
    const  query = `
    DELETE FROM "Guild"
    CASCADE
    WHERE name = '${guild_name}';
    `
    return queryDB(query)
};

export const delete_contribution = (name: string) => {
    const  query = `
    DELETE FROM "Contribution"
    CASCADE
    WHERE name = '${name}';
    `
    return queryDB(query)
};

export const delete_attestation = (userID: number) => {
    const  query = `
    DELETE FROM "Attestation"
    CASCADE
    WHERE user_id = '${userID}';
    `
    return queryDB(query)
};

export const delete_GuildContribution = (guildID: number) => {
    const  query = `
    DELETE FROM "GuildContribution"
    CASCADE
    WHERE guild_id = '${guildID}';
    `
    return queryDB(query)
};

export const delete_user = (username: string) => {
    const  query = `
    DELETE FROM "User"
    CASCADE
    WHERE name = '${username}';
    `
    return queryDB(query)
};

export const delete_chainType = (name: string) => {
    const  query = `
    DELETE FROM "ChainType"
    CASCADE
    WHERE name = '${name}';
    `
    return queryDB(query)
};

export const delete_UserActivity = (userID: string) => {
    const  query = `
    DELETE FROM "UserActivity"
    CASCADE
    WHERE user_id = '${userID}';
    `
    return queryDB(query)
};

export const contribution_status = () => {
    const  query  = `
    INSERT INTO "ContributionStatus" (name) VALUES 
      ('staging'),
      ('minted')
    ON CONFLICT DO NOTHING;
    `
    return queryDB(query)
};

