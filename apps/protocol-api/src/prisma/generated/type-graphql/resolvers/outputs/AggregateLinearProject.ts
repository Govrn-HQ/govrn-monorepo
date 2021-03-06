import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearProjectAvgAggregate } from "../outputs/LinearProjectAvgAggregate";
import { LinearProjectCountAggregate } from "../outputs/LinearProjectCountAggregate";
import { LinearProjectMaxAggregate } from "../outputs/LinearProjectMaxAggregate";
import { LinearProjectMinAggregate } from "../outputs/LinearProjectMinAggregate";
import { LinearProjectSumAggregate } from "../outputs/LinearProjectSumAggregate";

@TypeGraphQL.ObjectType("AggregateLinearProject", {
  isAbstract: true
})
export class AggregateLinearProject {
  @TypeGraphQL.Field(_type => LinearProjectCountAggregate, {
    nullable: true
  })
  _count!: LinearProjectCountAggregate | null;

  @TypeGraphQL.Field(_type => LinearProjectAvgAggregate, {
    nullable: true
  })
  _avg!: LinearProjectAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinearProjectSumAggregate, {
    nullable: true
  })
  _sum!: LinearProjectSumAggregate | null;

  @TypeGraphQL.Field(_type => LinearProjectMinAggregate, {
    nullable: true
  })
  _min!: LinearProjectMinAggregate | null;

  @TypeGraphQL.Field(_type => LinearProjectMaxAggregate, {
    nullable: true
  })
  _max!: LinearProjectMaxAggregate | null;
}
