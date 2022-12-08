import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildVerificationStatusAvgAggregate } from "../outputs/GuildVerificationStatusAvgAggregate";
import { GuildVerificationStatusCountAggregate } from "../outputs/GuildVerificationStatusCountAggregate";
import { GuildVerificationStatusMaxAggregate } from "../outputs/GuildVerificationStatusMaxAggregate";
import { GuildVerificationStatusMinAggregate } from "../outputs/GuildVerificationStatusMinAggregate";
import { GuildVerificationStatusSumAggregate } from "../outputs/GuildVerificationStatusSumAggregate";

@TypeGraphQL.ObjectType("GuildVerificationStatusGroupBy", {
  isAbstract: true
})
export class GuildVerificationStatusGroupBy {
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

  @TypeGraphQL.Field(_type => GuildVerificationStatusCountAggregate, {
    nullable: true
  })
  _count!: GuildVerificationStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildVerificationStatusAvgAggregate, {
    nullable: true
  })
  _avg!: GuildVerificationStatusAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildVerificationStatusSumAggregate, {
    nullable: true
  })
  _sum!: GuildVerificationStatusSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildVerificationStatusMinAggregate, {
    nullable: true
  })
  _min!: GuildVerificationStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildVerificationStatusMaxAggregate, {
    nullable: true
  })
  _max!: GuildVerificationStatusMaxAggregate | null;
}
