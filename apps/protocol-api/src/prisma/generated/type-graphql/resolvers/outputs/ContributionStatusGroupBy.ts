import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionStatusAvgAggregate } from "../outputs/ContributionStatusAvgAggregate";
import { ContributionStatusCountAggregate } from "../outputs/ContributionStatusCountAggregate";
import { ContributionStatusMaxAggregate } from "../outputs/ContributionStatusMaxAggregate";
import { ContributionStatusMinAggregate } from "../outputs/ContributionStatusMinAggregate";
import { ContributionStatusSumAggregate } from "../outputs/ContributionStatusSumAggregate";

@TypeGraphQL.ObjectType("ContributionStatusGroupBy", {
  isAbstract: true
})
export class ContributionStatusGroupBy {
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
