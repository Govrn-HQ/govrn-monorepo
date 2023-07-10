import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSplit_contractsInput } from "../inputs/UserCreateNestedOneWithoutSplit_contractsInput";

@TypeGraphQL.InputType("UserSplitContractCreateWithoutSplit_contractInput", {
  isAbstract: true
})
export class UserSplitContractCreateWithoutSplit_contractInput {
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
}
