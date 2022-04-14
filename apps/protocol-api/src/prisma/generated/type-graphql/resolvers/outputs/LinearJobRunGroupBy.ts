import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearJobRunAvgAggregate } from "../outputs/LinearJobRunAvgAggregate";
import { LinearJobRunCountAggregate } from "../outputs/LinearJobRunCountAggregate";
import { LinearJobRunMaxAggregate } from "../outputs/LinearJobRunMaxAggregate";
import { LinearJobRunMinAggregate } from "../outputs/LinearJobRunMinAggregate";
import { LinearJobRunSumAggregate } from "../outputs/LinearJobRunSumAggregate";

@TypeGraphQL.ObjectType("LinearJobRunGroupBy", {
  isAbstract: true
})
export class LinearJobRunGroupBy {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  completedDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => LinearJobRunCountAggregate, {
    nullable: true
  })
  _count!: LinearJobRunCountAggregate | null;

  @TypeGraphQL.Field(_type => LinearJobRunAvgAggregate, {
    nullable: true
  })
  _avg!: LinearJobRunAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinearJobRunSumAggregate, {
    nullable: true
  })
  _sum!: LinearJobRunSumAggregate | null;

  @TypeGraphQL.Field(_type => LinearJobRunMinAggregate, {
    nullable: true
  })
  _min!: LinearJobRunMinAggregate | null;

  @TypeGraphQL.Field(_type => LinearJobRunMaxAggregate, {
    nullable: true
  })
  _max!: LinearJobRunMaxAggregate | null;
}
