import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionStatusAvgAggregate } from "../outputs/ContributionStatusAvgAggregate";
import { ContributionStatusCountAggregate } from "../outputs/ContributionStatusCountAggregate";
import { ContributionStatusMaxAggregate } from "../outputs/ContributionStatusMaxAggregate";
import { ContributionStatusMinAggregate } from "../outputs/ContributionStatusMinAggregate";
import { ContributionStatusSumAggregate } from "../outputs/ContributionStatusSumAggregate";

@TypeGraphQL.ObjectType("AggregateContributionStatus", {
  isAbstract: true
})
export class AggregateContributionStatus {
  @TypeGraphQL.Field(_type => ContributionStatusCountAggregate, {
    nullable: true
  })
  _count!: ContributionStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => ContributionStatusAvgAggregate, {
    nullable: true
  })
  _avg!: ContributionStatusAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContributionStatusSumAggregate, {
    nullable: true
  })
  _sum!: ContributionStatusSumAggregate | null;

  @TypeGraphQL.Field(_type => ContributionStatusMinAggregate, {
    nullable: true
  })
  _min!: ContributionStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => ContributionStatusMaxAggregate, {
    nullable: true
  })
  _max!: ContributionStatusMaxAggregate | null;
}
