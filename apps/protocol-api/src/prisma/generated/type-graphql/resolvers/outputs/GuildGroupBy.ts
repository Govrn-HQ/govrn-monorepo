import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildAvgAggregate } from "../outputs/GuildAvgAggregate";
import { GuildCountAggregate } from "../outputs/GuildCountAggregate";
import { GuildMaxAggregate } from "../outputs/GuildMaxAggregate";
import { GuildMinAggregate } from "../outputs/GuildMinAggregate";
import { GuildSumAggregate } from "../outputs/GuildSumAggregate";

@TypeGraphQL.ObjectType("GuildGroupBy", {
  isAbstract: true
})
export class GuildGroupBy {
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
    nullable: true
  })
  discord_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  congrats_channel!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contribution_reporting_channel!: number | null;

  @TypeGraphQL.Field(_type => GuildCountAggregate, {
    nullable: true
  })
  _count!: GuildCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildAvgAggregate, {
    nullable: true
  })
  _avg!: GuildAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildSumAggregate, {
    nullable: true
  })
  _sum!: GuildSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildMinAggregate, {
    nullable: true
  })
  _min!: GuildMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildMaxAggregate, {
    nullable: true
  })
  _max!: GuildMaxAggregate | null;
}
