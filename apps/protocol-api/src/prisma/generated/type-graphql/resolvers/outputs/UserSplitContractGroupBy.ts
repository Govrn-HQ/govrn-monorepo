import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractAvgAggregate } from "../outputs/UserSplitContractAvgAggregate";
import { UserSplitContractCountAggregate } from "../outputs/UserSplitContractCountAggregate";
import { UserSplitContractMaxAggregate } from "../outputs/UserSplitContractMaxAggregate";
import { UserSplitContractMinAggregate } from "../outputs/UserSplitContractMinAggregate";
import { UserSplitContractSumAggregate } from "../outputs/UserSplitContractSumAggregate";

@TypeGraphQL.ObjectType("UserSplitContractGroupBy", {
  isAbstract: true
})
export class UserSplitContractGroupBy {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enabled!: boolean;

  @TypeGraphQL.Field(_type => UserSplitContractCountAggregate, {
    nullable: true
  })
  _count!: UserSplitContractCountAggregate | null;

  @TypeGraphQL.Field(_type => UserSplitContractAvgAggregate, {
    nullable: true
  })
  _avg!: UserSplitContractAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserSplitContractSumAggregate, {
    nullable: true
  })
  _sum!: UserSplitContractSumAggregate | null;

  @TypeGraphQL.Field(_type => UserSplitContractMinAggregate, {
    nullable: true
  })
  _min!: UserSplitContractMinAggregate | null;

  @TypeGraphQL.Field(_type => UserSplitContractMaxAggregate, {
    nullable: true
  })
  _max!: UserSplitContractMaxAggregate | null;
}
