import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationAvgAggregate } from "../outputs/AttestationAvgAggregate";
import { AttestationCountAggregate } from "../outputs/AttestationCountAggregate";
import { AttestationMaxAggregate } from "../outputs/AttestationMaxAggregate";
import { AttestationMinAggregate } from "../outputs/AttestationMinAggregate";
import { AttestationSumAggregate } from "../outputs/AttestationSumAggregate";

@TypeGraphQL.ObjectType("AttestationGroupBy", {
  isAbstract: true
})
export class AttestationGroupBy {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  confidence_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contribution_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attestation_status_id!: number | null;

  @TypeGraphQL.Field(_type => AttestationCountAggregate, {
    nullable: true
  })
  _count!: AttestationCountAggregate | null;

  @TypeGraphQL.Field(_type => AttestationAvgAggregate, {
    nullable: true
  })
  _avg!: AttestationAvgAggregate | null;

  @TypeGraphQL.Field(_type => AttestationSumAggregate, {
    nullable: true
  })
  _sum!: AttestationSumAggregate | null;

  @TypeGraphQL.Field(_type => AttestationMinAggregate, {
    nullable: true
  })
  _min!: AttestationMinAggregate | null;

  @TypeGraphQL.Field(_type => AttestationMaxAggregate, {
    nullable: true
  })
  _max!: AttestationMaxAggregate | null;
}
