import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractWhereInput } from "../inputs/UserSplitContractWhereInput";

@TypeGraphQL.InputType("UserSplitContractListRelationFilter", {
  isAbstract: true
})
export class UserSplitContractListRelationFilter {
  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  every?: UserSplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  some?: UserSplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  none?: UserSplitContractWhereInput | undefined;
}
