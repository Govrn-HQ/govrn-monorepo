import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceAvgAggregate } from "../outputs/AttestationConfidenceAvgAggregate";
import { AttestationConfidenceCountAggregate } from "../outputs/AttestationConfidenceCountAggregate";
import { AttestationConfidenceMaxAggregate } from "../outputs/AttestationConfidenceMaxAggregate";
import { AttestationConfidenceMinAggregate } from "../outputs/AttestationConfidenceMinAggregate";
import { AttestationConfidenceSumAggregate } from "../outputs/AttestationConfidenceSumAggregate";

@TypeGraphQL.ObjectType("AggregateAttestationConfidence", {
  isAbstract: true
})
export class AggregateAttestationConfidence {
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
