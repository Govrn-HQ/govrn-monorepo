import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAttestationsInput } from "../inputs/UserCreateOrConnectWithoutAttestationsInput";
import { UserCreateWithoutAttestationsInput } from "../inputs/UserCreateWithoutAttestationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutAttestationsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutAttestationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAttestationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAttestationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
