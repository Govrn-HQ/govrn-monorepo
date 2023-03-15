import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionAvgAggregate } from "../outputs/GuildContributionAvgAggregate";
import { GuildContributionCountAggregate } from "../outputs/GuildContributionCountAggregate";
import { GuildContributionMaxAggregate } from "../outputs/GuildContributionMaxAggregate";
import { GuildContributionMinAggregate } from "../outputs/GuildContributionMinAggregate";
import { GuildContributionSumAggregate } from "../outputs/GuildContributionSumAggregate";

@TypeGraphQL.ObjectType("GuildContributionGroupBy", {
  isAbstract: true
})
export class GuildContributionGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guild_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contribution_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  verification_status_id!: number | null;

  @TypeGraphQL.Field(_type => GuildContributionCountAggregate, {
    nullable: true
  })
  _count!: GuildContributionCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildContributionAvgAggregate, {
    nullable: true
  })
  _avg!: GuildContributionAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildContributionSumAggregate, {
    nullable: true
  })
  _sum!: GuildContributionSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildContributionMinAggregate, {
    nullable: true
  })
  _min!: GuildContributionMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildContributionMaxAggregate, {
    nullable: true
  })
  _max!: GuildContributionMaxAggregate | null;
}
