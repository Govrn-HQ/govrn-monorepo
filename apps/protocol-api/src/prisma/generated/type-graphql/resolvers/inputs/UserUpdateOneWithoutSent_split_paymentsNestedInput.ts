import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSent_split_paymentsInput } from "../inputs/UserCreateOrConnectWithoutSent_split_paymentsInput";
import { UserCreateWithoutSent_split_paymentsInput } from "../inputs/UserCreateWithoutSent_split_paymentsInput";
import { UserUpdateWithoutSent_split_paymentsInput } from "../inputs/UserUpdateWithoutSent_split_paymentsInput";
import { UserUpsertWithoutSent_split_paymentsInput } from "../inputs/UserUpsertWithoutSent_split_paymentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutSent_split_paymentsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutSent_split_paymentsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSent_split_paymentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSent_split_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSent_split_paymentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSent_split_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSent_split_paymentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSent_split_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSent_split_paymentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSent_split_paymentsInput | undefined;
}
