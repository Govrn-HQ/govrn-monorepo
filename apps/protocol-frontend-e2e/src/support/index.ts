import './commands';

export type JSONPrimitive = string | number | boolean | null
export type JSONArray = JSONValue[]
export type JSONValue = JSONArray | JSONObject | JSONPrimitive
export type JSONObject = { [k: string]: JSONValue }

export type GuildUserObjectType = { [key: string]: number } 
export type GuildContributionObjectType = { [key: string]: number } 