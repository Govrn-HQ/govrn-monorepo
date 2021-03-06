import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutPartnersInput } from "../inputs/ContributionCreateNestedOneWithoutPartnersInput";
import { UserCreateNestedOneWithoutContributionPartnersInput } from "../inputs/UserCreateNestedOneWithoutContributionPartnersInput";

@TypeGraphQL.InputType("PartnerCreateInput", {
  isAbstract: true
})
export class PartnerCreateInput {
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

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutPartnersInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutPartnersInput;
}
