import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateNestedManyWithoutUser_split_contractInput } from "../inputs/SplitContractCreateNestedManyWithoutUser_split_contractInput";

@TypeGraphQL.InputType("UserSplitContractCreateWithoutUserInput", {
  isAbstract: true
})
export class UserSplitContractCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  enabled!: boolean;

  @TypeGraphQL.Field(_type => SplitContractCreateNestedManyWithoutUser_split_contractInput, {
    nullable: true
  })
  split_contract?: SplitContractCreateNestedManyWithoutUser_split_contractInput | undefined;
}
