import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GuildContribution } from "../models/GuildContribution";
import { GuildContributionVerificationStatusCount } from "../resolvers/outputs/GuildContributionVerificationStatusCount";

@TypeGraphQL.ObjectType("GuildContributionVerificationStatus", {
  isAbstract: true
})
export class GuildContributionVerificationStatus {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  guild_contributions?: GuildContribution[];

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCount, {
    nullable: true
  })
  _count?: GuildContributionVerificationStatusCount | null;
}
