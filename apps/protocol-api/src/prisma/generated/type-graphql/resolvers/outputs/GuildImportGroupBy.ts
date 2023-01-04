import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportAvgAggregate } from "../outputs/GuildImportAvgAggregate";
import { GuildImportCountAggregate } from "../outputs/GuildImportCountAggregate";
import { GuildImportMaxAggregate } from "../outputs/GuildImportMaxAggregate";
import { GuildImportMinAggregate } from "../outputs/GuildImportMinAggregate";
import { GuildImportSumAggregate } from "../outputs/GuildImportSumAggregate";

@TypeGraphQL.ObjectType("GuildImportGroupBy", {
  isAbstract: true
})
export class GuildImportGroupBy {
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
  authentication_token!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guild_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  integration_type_id!: number;

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
