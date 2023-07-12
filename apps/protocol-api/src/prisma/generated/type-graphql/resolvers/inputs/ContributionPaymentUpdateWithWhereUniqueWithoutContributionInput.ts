import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentUpdateWithoutContributionInput } from "../inputs/ContributionPaymentUpdateWithoutContributionInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentUpdateWithWhereUniqueWithoutContributionInput", {
  isAbstract: true
})
export class ContributionPaymentUpdateWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionPaymentUpdateWithoutContributionInput, {
    nullable: false
  })
  data!: ContributionPaymentUpdateWithoutContributionInput;
}
