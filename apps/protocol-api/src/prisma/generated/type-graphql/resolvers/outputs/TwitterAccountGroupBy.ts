import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterAccountAvgAggregate } from "../outputs/TwitterAccountAvgAggregate";
import { TwitterAccountCountAggregate } from "../outputs/TwitterAccountCountAggregate";
import { TwitterAccountMaxAggregate } from "../outputs/TwitterAccountMaxAggregate";
import { TwitterAccountMinAggregate } from "../outputs/TwitterAccountMinAggregate";
import { TwitterAccountSumAggregate } from "../outputs/TwitterAccountSumAggregate";

@TypeGraphQL.ObjectType("TwitterAccountGroupBy", {
  isAbstract: true
})
export class TwitterAccountGroupBy {
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
  account_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  guild_id!: number | null;

  @TypeGraphQL.Field(_type => TwitterAccountCountAggregate, {
    nullable: true
  })
  _count!: TwitterAccountCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitterAccountAvgAggregate, {
    nullable: true
  })
  _avg!: TwitterAccountAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitterAccountSumAggregate, {
    nullable: true
  })
  _sum!: TwitterAccountSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitterAccountMinAggregate, {
    nullable: true
  })
  _min!: TwitterAccountMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitterAccountMaxAggregate, {
    nullable: true
  })
  _max!: TwitterAccountMaxAggregate | null;
}
