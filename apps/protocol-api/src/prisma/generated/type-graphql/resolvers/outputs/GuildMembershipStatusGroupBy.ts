import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildMembershipStatusAvgAggregate } from "../outputs/GuildMembershipStatusAvgAggregate";
import { GuildMembershipStatusCountAggregate } from "../outputs/GuildMembershipStatusCountAggregate";
import { GuildMembershipStatusMaxAggregate } from "../outputs/GuildMembershipStatusMaxAggregate";
import { GuildMembershipStatusMinAggregate } from "../outputs/GuildMembershipStatusMinAggregate";
import { GuildMembershipStatusSumAggregate } from "../outputs/GuildMembershipStatusSumAggregate";

@TypeGraphQL.ObjectType("GuildMembershipStatusGroupBy", {
  isAbstract: true
})
export class GuildMembershipStatusGroupBy {
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
