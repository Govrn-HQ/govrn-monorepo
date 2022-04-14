import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearTeamAvgAggregate } from "../outputs/LinearTeamAvgAggregate";
import { LinearTeamCountAggregate } from "../outputs/LinearTeamCountAggregate";
import { LinearTeamMaxAggregate } from "../outputs/LinearTeamMaxAggregate";
import { LinearTeamMinAggregate } from "../outputs/LinearTeamMinAggregate";
import { LinearTeamSumAggregate } from "../outputs/LinearTeamSumAggregate";

@TypeGraphQL.ObjectType("AggregateLinearTeam", {
  isAbstract: true
})
export class AggregateLinearTeam {
  @TypeGraphQL.Field(_type => LinearTeamCountAggregate, {
    nullable: true
  })
  _count!: LinearTeamCountAggregate | null;

  @TypeGraphQL.Field(_type => LinearTeamAvgAggregate, {
    nullable: true
  })
  _avg!: LinearTeamAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinearTeamSumAggregate, {
    nullable: true
  })
  _sum!: LinearTeamSumAggregate | null;

  @TypeGraphQL.Field(_type => LinearTeamMinAggregate, {
    nullable: true
  })
  _min!: LinearTeamMinAggregate | null;

  @TypeGraphQL.Field(_type => LinearTeamMaxAggregate, {
    nullable: true
  })
  _max!: LinearTeamMaxAggregate | null;
}
