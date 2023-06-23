import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractWhereInput } from "../inputs/UserSplitContractWhereInput";

@TypeGraphQL.InputType("UserSplitContractRelationFilter", {
  isAbstract: true
})
export class UserSplitContractRelationFilter {
  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  is?: UserSplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractWhereInput, {
    nullable: true
  })
  isNot?: UserSplitContractWhereInput | undefined;
}
