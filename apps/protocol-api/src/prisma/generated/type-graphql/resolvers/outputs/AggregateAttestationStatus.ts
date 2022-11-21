import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusAvgAggregate } from "../outputs/AttestationStatusAvgAggregate";
import { AttestationStatusCountAggregate } from "../outputs/AttestationStatusCountAggregate";
import { AttestationStatusMaxAggregate } from "../outputs/AttestationStatusMaxAggregate";
import { AttestationStatusMinAggregate } from "../outputs/AttestationStatusMinAggregate";
import { AttestationStatusSumAggregate } from "../outputs/AttestationStatusSumAggregate";

@TypeGraphQL.ObjectType("AggregateAttestationStatus", {
  isAbstract: true
})
export class AggregateAttestationStatus {
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
