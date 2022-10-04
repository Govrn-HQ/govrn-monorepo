import queryDB from "./db";
//types
type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONArray | JSONObject | JSONPrimitive

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

export const create_guild = (guild_name: string) => {
    const  query = `
    INSERT INTO "Guild" (name)
    VALUES ('${guild_name}')
    `
    return queryDB(query)
};

export const create_contribution = (contributionData: JSONObject) => {
    const statusID = 1  
    console.log(contributionData.proof)    
    const query= `
    INSERT INTO "Contribution" (name, status_id, activity_type_id, user_id, date_of_engagement, details, proof)
        VALUES ('${contributionData.name}',${statusID} , ${contributionData.activityTypeID}, ${contributionData.userID}, current_timestamp,
        '${contributionData.details}', '${contributionData.proof}')
        ON CONFLICT DO NOTHING;
    `
    return queryDB(query)
};

export const create_MintedContribution = (contributionData: JSONObject) => {
    const statusID = 2
    const query = `
    INSERT INTO "Contribution" (name, status_id, activity_type_id, user_id, date_of_engagement, details, proof )
      VALUES ('${contributionData.name}',${statusID} ,${contributionData.activityTypeID}, ${contributionData.userID}, current_timestamp,
       '${contributionData.details}', '${contributionData.proof}'
      )
    `
   return queryDB(query)
};
export const delete_guild = (guild_name: string) => {
    const  query = `
    DELETE FROM "Guild"
    WHERE name = '${guild_name}';
    `
    return queryDB(query)
};
export const delete_contribution = (name: string) => {
    const  query = `
    DELETE FROM "Contribution"
    WHERE name = '${name}'
    `
    return queryDB(query)
};
export const delete_user = (username: string) => {
    console.log(username)
    const  query = `
    DELETE FROM "User"
    WHERE name = '${username}';
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

