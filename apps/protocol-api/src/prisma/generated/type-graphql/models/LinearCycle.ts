import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LinearIssue } from "../models/LinearIssue";
import { LinearCycleCount } from "../resolvers/outputs/LinearCycleCount";

@TypeGraphQL.ObjectType("LinearCycle", {
  isAbstract: true
})
export class LinearCycle {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  number!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startsAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endsAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linear_id!: string;

  issues?: LinearIssue[];

  @TypeGraphQL.Field(_type => LinearCycleCount, {
    nullable: true
  })
  _count?: LinearCycleCount | null;
}
