import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceAvgAggregate } from "../outputs/AttestationConfidenceAvgAggregate";
import { AttestationConfidenceCountAggregate } from "../outputs/AttestationConfidenceCountAggregate";
import { AttestationConfidenceMaxAggregate } from "../outputs/AttestationConfidenceMaxAggregate";
import { AttestationConfidenceMinAggregate } from "../outputs/AttestationConfidenceMinAggregate";
import { AttestationConfidenceSumAggregate } from "../outputs/AttestationConfidenceSumAggregate";

@TypeGraphQL.ObjectType("AttestationConfidenceGroupBy", {
  isAbstract: true
})
export class AttestationConfidenceGroupBy {
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

  @TypeGraphQL.Field(_type => AttestationConfidenceCountAggregate, {
    nullable: true
  })
  _count!: AttestationConfidenceCountAggregate | null;

  @TypeGraphQL.Field(_type => AttestationConfidenceAvgAggregate, {
    nullable: true
  })
  _avg!: AttestationConfidenceAvgAggregate | null;

  @TypeGraphQL.Field(_type => AttestationConfidenceSumAggregate, {
    nullable: true
  })
  _sum!: AttestationConfidenceSumAggregate | null;

  @TypeGraphQL.Field(_type => AttestationConfidenceMinAggregate, {
    nullable: true
  })
  _min!: AttestationConfidenceMinAggregate | null;

  @TypeGraphQL.Field(_type => AttestationConfidenceMaxAggregate, {
    nullable: true
  })
  _max!: AttestationConfidenceMaxAggregate | null;
}
