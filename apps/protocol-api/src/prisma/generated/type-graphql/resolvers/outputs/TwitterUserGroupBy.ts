import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterUserAvgAggregate } from "../outputs/TwitterUserAvgAggregate";
import { TwitterUserCountAggregate } from "../outputs/TwitterUserCountAggregate";
import { TwitterUserMaxAggregate } from "../outputs/TwitterUserMaxAggregate";
import { TwitterUserMinAggregate } from "../outputs/TwitterUserMinAggregate";
import { TwitterUserSumAggregate } from "../outputs/TwitterUserSumAggregate";

@TypeGraphQL.ObjectType("TwitterUserGroupBy", {
  isAbstract: true
})
export class TwitterUserGroupBy {
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
  twitter_user_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_id!: number | null;

  @TypeGraphQL.Field(_type => TwitterUserCountAggregate, {
    nullable: true
  })
  _count!: TwitterUserCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserAvgAggregate, {
    nullable: true
  })
  _avg!: TwitterUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserSumAggregate, {
    nullable: true
  })
  _sum!: TwitterUserSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserMinAggregate, {
    nullable: true
  })
  _min!: TwitterUserMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserMaxAggregate, {
    nullable: true
  })
  _max!: TwitterUserMaxAggregate | null;
}
