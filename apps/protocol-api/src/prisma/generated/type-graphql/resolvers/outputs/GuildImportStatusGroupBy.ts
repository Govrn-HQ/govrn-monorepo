import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusAvgAggregate } from "../outputs/GuildImportStatusAvgAggregate";
import { GuildImportStatusCountAggregate } from "../outputs/GuildImportStatusCountAggregate";
import { GuildImportStatusMaxAggregate } from "../outputs/GuildImportStatusMaxAggregate";
import { GuildImportStatusMinAggregate } from "../outputs/GuildImportStatusMinAggregate";
import { GuildImportStatusSumAggregate } from "../outputs/GuildImportStatusSumAggregate";

@TypeGraphQL.ObjectType("GuildImportStatusGroupBy", {
  isAbstract: true
})
export class GuildImportStatusGroupBy {
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

  @TypeGraphQL.Field(_type => GuildImportStatusCountAggregate, {
    nullable: true
  })
  _count!: GuildImportStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildImportStatusAvgAggregate, {
    nullable: true
  })
  _avg!: GuildImportStatusAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildImportStatusSumAggregate, {
    nullable: true
  })
  _sum!: GuildImportStatusSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildImportStatusMinAggregate, {
    nullable: true
  })
  _min!: GuildImportStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildImportStatusMaxAggregate, {
    nullable: true
  })
  _max!: GuildImportStatusMaxAggregate | null;
}
