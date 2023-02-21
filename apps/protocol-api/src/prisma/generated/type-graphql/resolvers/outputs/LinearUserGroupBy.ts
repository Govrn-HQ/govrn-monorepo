import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserAvgAggregate } from "../outputs/LinearUserAvgAggregate";
import { LinearUserCountAggregate } from "../outputs/LinearUserCountAggregate";
import { LinearUserMaxAggregate } from "../outputs/LinearUserMaxAggregate";
import { LinearUserMinAggregate } from "../outputs/LinearUserMinAggregate";
import { LinearUserSumAggregate } from "../outputs/LinearUserSumAggregate";

@TypeGraphQL.ObjectType("LinearUserGroupBy", {
  isAbstract: true
})
export class LinearUserGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linear_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_token!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active_token!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  user_id!: number | null;

  @TypeGraphQL.Field(_type => LinearUserCountAggregate, {
    nullable: true
  })
  _count!: LinearUserCountAggregate | null;

  @TypeGraphQL.Field(_type => LinearUserAvgAggregate, {
    nullable: true
  })
  _avg!: LinearUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinearUserSumAggregate, {
    nullable: true
  })
  _sum!: LinearUserSumAggregate | null;

  @TypeGraphQL.Field(_type => LinearUserMinAggregate, {
    nullable: true
  })
  _min!: LinearUserMinAggregate | null;

  @TypeGraphQL.Field(_type => LinearUserMaxAggregate, {
    nullable: true
  })
  _max!: LinearUserMaxAggregate | null;
}
