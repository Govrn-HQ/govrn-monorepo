import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAttestationsInput } from "../inputs/UserCreateWithoutAttestationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutAttestationsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAttestationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutAttestationsInput;
}
