import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusAvgAggregate } from "../outputs/AttestationStatusAvgAggregate";
import { AttestationStatusCountAggregate } from "../outputs/AttestationStatusCountAggregate";
import { AttestationStatusMaxAggregate } from "../outputs/AttestationStatusMaxAggregate";
import { AttestationStatusMinAggregate } from "../outputs/AttestationStatusMinAggregate";
import { AttestationStatusSumAggregate } from "../outputs/AttestationStatusSumAggregate";

@TypeGraphQL.ObjectType("AttestationStatusGroupBy", {
  isAbstract: true
})
export class AttestationStatusGroupBy {
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

  @TypeGraphQL.Field(_type => AttestationStatusCountAggregate, {
    nullable: true
  })
  _count!: AttestationStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => AttestationStatusAvgAggregate, {
    nullable: true
  })
  _avg!: AttestationStatusAvgAggregate | null;

  @TypeGraphQL.Field(_type => AttestationStatusSumAggregate, {
    nullable: true
  })
  _sum!: AttestationStatusSumAggregate | null;

  @TypeGraphQL.Field(_type => AttestationStatusMinAggregate, {
    nullable: true
  })
  _min!: AttestationStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => AttestationStatusMaxAggregate, {
    nullable: true
  })
  _max!: AttestationStatusMaxAggregate | null;
}
