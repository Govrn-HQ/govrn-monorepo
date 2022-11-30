import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutContributionPartnersInput } from "../inputs/UserCreateOrConnectWithoutContributionPartnersInput";
import { UserCreateWithoutContributionPartnersInput } from "../inputs/UserCreateWithoutContributionPartnersInput";
import { UserUpdateWithoutContributionPartnersInput } from "../inputs/UserUpdateWithoutContributionPartnersInput";
import { UserUpsertWithoutContributionPartnersInput } from "../inputs/UserUpsertWithoutContributionPartnersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutContributionPartnersNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutContributionPartnersNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutContributionPartnersInput, {
    nullable: true
  })
  create?: UserCreateWithoutContributionPartnersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutContributionPartnersInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutContributionPartnersInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutContributionPartnersInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutContributionPartnersInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutContributionPartnersInput, {
    nullable: true
  })
  update?: UserUpdateWithoutContributionPartnersInput | undefined;
}
