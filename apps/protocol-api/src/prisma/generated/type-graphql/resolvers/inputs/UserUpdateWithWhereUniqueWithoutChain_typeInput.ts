import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutChain_typeInput } from "../inputs/UserUpdateWithoutChain_typeInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutChain_typeInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutChain_typeInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutChain_typeInput, {
    nullable: false
  })
  data!: UserUpdateWithoutChain_typeInput;
}
