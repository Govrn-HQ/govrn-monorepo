import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateWithoutContributionInput } from "../inputs/ContributionPaymentCreateWithoutContributionInput";
import { ContributionPaymentUpdateWithoutContributionInput } from "../inputs/ContributionPaymentUpdateWithoutContributionInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentUpsertWithWhereUniqueWithoutContributionInput", {
  isAbstract: true
})
export class ContributionPaymentUpsertWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionPaymentUpdateWithoutContributionInput, {
    nullable: false
  })
  update!: ContributionPaymentUpdateWithoutContributionInput;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateWithoutContributionInput, {
    nullable: false
  })
  create!: ContributionPaymentCreateWithoutContributionInput;
}
