import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportAvgAggregate } from "../outputs/GuildImportAvgAggregate";
import { GuildImportCountAggregate } from "../outputs/GuildImportCountAggregate";
import { GuildImportMaxAggregate } from "../outputs/GuildImportMaxAggregate";
import { GuildImportMinAggregate } from "../outputs/GuildImportMinAggregate";
import { GuildImportSumAggregate } from "../outputs/GuildImportSumAggregate";

@TypeGraphQL.ObjectType("AggregateGuildImport", {
  isAbstract: true
})
export class AggregateGuildImport {
  @TypeGraphQL.Field(_type => GuildImportCountAggregate, {
    nullable: true
  })
  _count!: GuildImportCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildImportAvgAggregate, {
    nullable: true
  })
  _avg!: GuildImportAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildImportSumAggregate, {
    nullable: true
  })
  _sum!: GuildImportSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildImportMinAggregate, {
    nullable: true
  })
  _min!: GuildImportMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildImportMaxAggregate, {
    nullable: true
  })
  _max!: GuildImportMaxAggregate | null;
}
