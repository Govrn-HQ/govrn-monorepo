import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateNestedManyWithoutUser_split_contractInput } from "../inputs/SplitContractCreateNestedManyWithoutUser_split_contractInput";
import { UserCreateNestedOneWithoutSplit_contractsInput } from "../inputs/UserCreateNestedOneWithoutSplit_contractsInput";

@TypeGraphQL.InputType("UserSplitContractCreateInput", {
  isAbstract: true
})
export class UserSplitContractCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSplit_contractsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSplit_contractsInput;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enabled!: boolean;

  @TypeGraphQL.Field(_type => SplitContractCreateNestedManyWithoutUser_split_contractInput, {
    nullable: true
  })
  split_contract?: SplitContractCreateNestedManyWithoutUser_split_contractInput | undefined;
}
