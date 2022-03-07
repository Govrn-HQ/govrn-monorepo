import Airtable = require('airtable');
import { Base } from '@qualifyze/airtable';
Airtable.configure({ apiKey: process.env.API_TOKEN });

const client = new Airtable();
const base = Base.fromOfficialClient(client, process.env.AIRTABLE_BASE);

type User = {
  discord_id?: string;
  guild_id?: string;
  guild_name?: string;
  user_dao_id?: number;
  display_name?: string;
  full_name?: string;
  discord_username?: string;
  twitter?: string;
  wallet?: string;
  discourse?: string;
  reason_to_join?: string;
};

export const users = base.table<User>('users');

type ActivityType = {
  activity_name_only: string;
  category: string;
  score: number;
  active: number;
  activity_history: string;
  activities_completed_count: number;
  guild: string;
  guild_name: string;
};

export const activityTypes = base.table<ActivityType>('Activity Types');

// TODO: logo object
//  [
//        {
//            "id": "attHnB3Oe1xwBBQQh",
//            "width": 500,
//            "height": 500,
//            "url": "https://dl.airtable.com/.attachments/a2487da190f613d6dc9e1d48c089a506/f3405c0a/G_Logo500.png",
//            "filename": "G_Logo500.png",
//            "size": 22100,
//            "type": "image/png",
//            "thumbnails": {
//                "small": {
//                    "url": "https://dl.airtable.com/.attachmentThumbnails/3e6f9b11aa512348b03f4293cccf80e6/6ee15343",
//                    "width": 36,
//                    "height": 36
//                },
//                "large": {
//                    "url": "https://dl.airtable.com/.attachmentThumbnails/7469346ffc78d9c3228861548ce01eed/c7b03386",
//                    "width": 500,
//                    "height": 500
//                },
//                "full": {
//                    "url": "https://dl.airtable.com/.attachmentThumbnails/dfa2e0eb4fad8497feb5389f4dda926b/3ac26bd0",
//                    "width": 3000,
//                    "height": 3000
//                }
//            }
//        }
//    ],
type Guild = {
  guild_name: string;
  govrn_supported: boolean;
  Status: string;
  activity_types: string[];
  members: string;
  total_members: number;
  contribution_flow: string[];
  congrats_channel_id: string;
};

export const guilds = base.table<Guild>('Guilds');
