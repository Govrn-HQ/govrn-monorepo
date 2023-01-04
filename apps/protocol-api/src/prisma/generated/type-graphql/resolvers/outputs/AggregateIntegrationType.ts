import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationTypeAvgAggregate } from "../outputs/IntegrationTypeAvgAggregate";
import { IntegrationTypeCountAggregate } from "../outputs/IntegrationTypeCountAggregate";
import { IntegrationTypeMaxAggregate } from "../outputs/IntegrationTypeMaxAggregate";
import { IntegrationTypeMinAggregate } from "../outputs/IntegrationTypeMinAggregate";
import { IntegrationTypeSumAggregate } from "../outputs/IntegrationTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateIntegrationType", {
  isAbstract: true
})
export class AggregateIntegrationType {
  @TypeGraphQL.Field(_type => IntegrationTypeCountAggregate, {
    nullable: true
  })
  _count!: IntegrationTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationTypeAvgAggregate, {
    nullable: true
  })
  _avg!: IntegrationTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationTypeSumAggregate, {
    nullable: true
  })
  _sum!: IntegrationTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationTypeMinAggregate, {
    nullable: true
  })
  _min!: IntegrationTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => IntegrationTypeMaxAggregate, {
    nullable: true
  })
  _max!: IntegrationTypeMaxAggregate | null;
}
