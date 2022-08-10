import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscordUserAvgAggregate } from "../outputs/DiscordUserAvgAggregate";
import { DiscordUserCountAggregate } from "../outputs/DiscordUserCountAggregate";
import { DiscordUserMaxAggregate } from "../outputs/DiscordUserMaxAggregate";
import { DiscordUserMinAggregate } from "../outputs/DiscordUserMinAggregate";
import { DiscordUserSumAggregate } from "../outputs/DiscordUserSumAggregate";

@TypeGraphQL.ObjectType("AggregateDiscordUser", {
  isAbstract: true
})
export class AggregateDiscordUser {
  @TypeGraphQL.Field(_type => DiscordUserCountAggregate, {
    nullable: true
  })
  _count!: DiscordUserCountAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserAvgAggregate, {
    nullable: true
  })
  _avg!: DiscordUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserSumAggregate, {
    nullable: true
  })
  _sum!: DiscordUserSumAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserMinAggregate, {
    nullable: true
  })
  _min!: DiscordUserMinAggregate | null;

  @TypeGraphQL.Field(_type => DiscordUserMaxAggregate, {
    nullable: true
  })
  _max!: DiscordUserMaxAggregate | null;
}
