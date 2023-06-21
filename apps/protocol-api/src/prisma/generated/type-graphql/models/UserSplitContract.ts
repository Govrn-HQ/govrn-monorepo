import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { SplitContract } from "../models/SplitContract";
import { User } from "../models/User";
import { UserSplitContractCount } from "../resolvers/outputs/UserSplitContractCount";

@TypeGraphQL.ObjectType("UserSplitContract", {
  isAbstract: true
})
export class UserSplitContract {
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

  user?: User;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enabled!: boolean;

  split_contract?: SplitContract[];

  @TypeGraphQL.Field(_type => UserSplitContractCount, {
    nullable: true
  })
  _count?: UserSplitContractCount | null;
}
