import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ActivityType } from "../models/ActivityType";
import { Attestation } from "../models/Attestation";
import { ContributionStatus } from "../models/ContributionStatus";
import { GuildContribution } from "../models/GuildContribution";
import { LinearIssue } from "../models/LinearIssue";
import { Partner } from "../models/Partner";
import { TwitterTweet } from "../models/TwitterTweet";
import { User } from "../models/User";
import { ContributionCount } from "../resolvers/outputs/ContributionCount";

@TypeGraphQL.ObjectType("Contribution", {
  isAbstract: true
})
export class Contribution {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  status_id!: number;

  status?: ContributionStatus;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  activity_type_id!: number;

  activity_type?: ActivityType;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_submission!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_of_engagement!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  proof?: string | null;

  attestations?: Attestation[];

  partners?: Partner[];

  guilds?: GuildContribution[];

  linear_issue?: LinearIssue | null;

  tweet?: TwitterTweet | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  on_chain_id?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tx_hash?: string | null;

  @TypeGraphQL.Field(_type => ContributionCount, {
    nullable: true
  })
  _count?: ContributionCount | null;
}
