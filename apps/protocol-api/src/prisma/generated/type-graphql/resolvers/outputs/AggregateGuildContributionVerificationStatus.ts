import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionVerificationStatusAvgAggregate } from "../outputs/GuildContributionVerificationStatusAvgAggregate";
import { GuildContributionVerificationStatusCountAggregate } from "../outputs/GuildContributionVerificationStatusCountAggregate";
import { GuildContributionVerificationStatusMaxAggregate } from "../outputs/GuildContributionVerificationStatusMaxAggregate";
import { GuildContributionVerificationStatusMinAggregate } from "../outputs/GuildContributionVerificationStatusMinAggregate";
import { GuildContributionVerificationStatusSumAggregate } from "../outputs/GuildContributionVerificationStatusSumAggregate";

@TypeGraphQL.ObjectType("AggregateGuildContributionVerificationStatus", {
  isAbstract: true
})
export class AggregateGuildContributionVerificationStatus {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusCountAggregate, {
    nullable: true
  })
  _count!: GuildContributionVerificationStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusAvgAggregate, {
    nullable: true
  })
  _avg!: GuildContributionVerificationStatusAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusSumAggregate, {
    nullable: true
  })
  _sum!: GuildContributionVerificationStatusSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusMinAggregate, {
    nullable: true
  })
  _min!: GuildContributionVerificationStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusMaxAggregate, {
    nullable: true
  })
  _max!: GuildContributionVerificationStatusMaxAggregate | null;
}
