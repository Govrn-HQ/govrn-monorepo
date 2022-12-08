import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildMembershipStatusAvgAggregate } from "../outputs/GuildMembershipStatusAvgAggregate";
import { GuildMembershipStatusCountAggregate } from "../outputs/GuildMembershipStatusCountAggregate";
import { GuildMembershipStatusMaxAggregate } from "../outputs/GuildMembershipStatusMaxAggregate";
import { GuildMembershipStatusMinAggregate } from "../outputs/GuildMembershipStatusMinAggregate";
import { GuildMembershipStatusSumAggregate } from "../outputs/GuildMembershipStatusSumAggregate";

@TypeGraphQL.ObjectType("AggregateGuildMembershipStatus", {
  isAbstract: true
})
export class AggregateGuildMembershipStatus {
  @TypeGraphQL.Field(_type => GuildMembershipStatusCountAggregate, {
    nullable: true
  })
  _count!: GuildMembershipStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildMembershipStatusAvgAggregate, {
    nullable: true
  })
  _avg!: GuildMembershipStatusAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildMembershipStatusSumAggregate, {
    nullable: true
  })
  _sum!: GuildMembershipStatusSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildMembershipStatusMinAggregate, {
    nullable: true
  })
  _min!: GuildMembershipStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildMembershipStatusMaxAggregate, {
    nullable: true
  })
  _max!: GuildMembershipStatusMaxAggregate | null;
}
