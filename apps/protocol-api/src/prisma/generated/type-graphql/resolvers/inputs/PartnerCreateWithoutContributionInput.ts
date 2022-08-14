import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutContributionPartnersInput } from "../inputs/UserCreateNestedOneWithoutContributionPartnersInput";

@TypeGraphQL.InputType("PartnerCreateWithoutContributionInput", {
  isAbstract: true
})
export class PartnerCreateWithoutContributionInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutContributionPartnersInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutContributionPartnersInput;
}
