import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionVerificationStatusAvgAggregate } from "../outputs/GuildContributionVerificationStatusAvgAggregate";
import { GuildContributionVerificationStatusCountAggregate } from "../outputs/GuildContributionVerificationStatusCountAggregate";
import { GuildContributionVerificationStatusMaxAggregate } from "../outputs/GuildContributionVerificationStatusMaxAggregate";
import { GuildContributionVerificationStatusMinAggregate } from "../outputs/GuildContributionVerificationStatusMinAggregate";
import { GuildContributionVerificationStatusSumAggregate } from "../outputs/GuildContributionVerificationStatusSumAggregate";

@TypeGraphQL.ObjectType("GuildContributionVerificationStatusGroupBy", {
  isAbstract: true
})
export class GuildContributionVerificationStatusGroupBy {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  verified!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  attestationThreshold!: number;

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
