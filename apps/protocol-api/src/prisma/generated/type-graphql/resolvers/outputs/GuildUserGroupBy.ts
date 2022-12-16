import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserAvgAggregate } from "../outputs/GuildUserAvgAggregate";
import { GuildUserCountAggregate } from "../outputs/GuildUserCountAggregate";
import { GuildUserMaxAggregate } from "../outputs/GuildUserMaxAggregate";
import { GuildUserMinAggregate } from "../outputs/GuildUserMinAggregate";
import { GuildUserSumAggregate } from "../outputs/GuildUserSumAggregate";

@TypeGraphQL.ObjectType("GuildUserGroupBy", {
  isAbstract: true
})
export class GuildUserGroupBy {
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
    nullable: false
  })
  user_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guild_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  membership_status_id!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  favorite!: boolean;

  @TypeGraphQL.Field(_type => GuildUserCountAggregate, {
    nullable: true
  })
  _count!: GuildUserCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildUserAvgAggregate, {
    nullable: true
  })
  _avg!: GuildUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildUserSumAggregate, {
    nullable: true
  })
  _sum!: GuildUserSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildUserMinAggregate, {
    nullable: true
  })
  _min!: GuildUserMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildUserMaxAggregate, {
    nullable: true
  })
  _max!: GuildUserMaxAggregate | null;
}
