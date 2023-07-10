import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSplit_contractsInput } from "../inputs/UserCreateWithoutSplit_contractsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSplit_contractsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSplit_contractsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSplit_contractsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSplit_contractsInput;
}
