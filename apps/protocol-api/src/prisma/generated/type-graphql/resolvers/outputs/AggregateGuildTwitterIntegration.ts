import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildTwitterIntegrationAvgAggregate } from "../outputs/GuildTwitterIntegrationAvgAggregate";
import { GuildTwitterIntegrationCountAggregate } from "../outputs/GuildTwitterIntegrationCountAggregate";
import { GuildTwitterIntegrationMaxAggregate } from "../outputs/GuildTwitterIntegrationMaxAggregate";
import { GuildTwitterIntegrationMinAggregate } from "../outputs/GuildTwitterIntegrationMinAggregate";
import { GuildTwitterIntegrationSumAggregate } from "../outputs/GuildTwitterIntegrationSumAggregate";

@TypeGraphQL.ObjectType("AggregateGuildTwitterIntegration", {
  isAbstract: true
})
export class AggregateGuildTwitterIntegration {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCountAggregate, {
    nullable: true
  })
  _count!: GuildTwitterIntegrationCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationAvgAggregate, {
    nullable: true
  })
  _avg!: GuildTwitterIntegrationAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationSumAggregate, {
    nullable: true
  })
  _sum!: GuildTwitterIntegrationSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationMinAggregate, {
    nullable: true
  })
  _min!: GuildTwitterIntegrationMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationMaxAggregate, {
    nullable: true
  })
  _max!: GuildTwitterIntegrationMaxAggregate | null;
}
