import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutContributionPartnersInput } from "../inputs/UserCreateWithoutContributionPartnersInput";
import { UserUpdateWithoutContributionPartnersInput } from "../inputs/UserUpdateWithoutContributionPartnersInput";

@TypeGraphQL.InputType("UserUpsertWithoutContributionPartnersInput", {
  isAbstract: true
})
export class UserUpsertWithoutContributionPartnersInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutContributionPartnersInput, {
    nullable: false
  })
  update!: UserUpdateWithoutContributionPartnersInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutContributionPartnersInput, {
    nullable: false
  })
  create!: UserCreateWithoutContributionPartnersInput;
}
