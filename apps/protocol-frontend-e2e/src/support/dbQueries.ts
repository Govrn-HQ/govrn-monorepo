import queryDB from "./db";
//types
type JSONPrimitive = string | number | boolean | null
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
type JSONValue = JSONArray | JSONObject | JSONPrimitive

// think about seeding activityTypeID values(Maybe)
export const create_user = (userData: JSONObject) => {
    const  query = `
    INSERT INTO "User" (name, address, chain_type_id, active, email )
    VALUES ('${userData.username}', '${userData.address}', ${userData.chain_type_id}
      , ${userData.active}, '${userData.email}'
    );
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
    const query= `
    INSERT INTO "Contribution" (name, status_id, activity_type_id, user_id, date_of_engagement, details, proof)
        VALUES ('${contributionData.name}',${statusID} , ${contributionData.activityTypeID}, ${contributionData.userID}, current_timestamp,
        '${contributionData.details}', '${contributionData.proof}'
        );
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
// check 'guild_name'
export const delete_guild = (guild_name: string) => {
    const  query = `
    DELETE FROM "Guild"
    WHERE name = '${guild_name}';
    `
    return queryDB(query)
};
//check 'proof' for contribution
export const delete_contribution = (proofData: string) => {
    const  query = `
    DELETE FROM "Contribution"
    WHERE proof = '${proofData}'
    `
    return queryDB(query)
};
//check 'name' for contribution
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
      ('minted');
    `
    
    return queryDB(query)
};

