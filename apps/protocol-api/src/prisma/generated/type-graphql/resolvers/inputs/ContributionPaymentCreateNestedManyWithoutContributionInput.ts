import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateManyContributionInputEnvelope } from "../inputs/ContributionPaymentCreateManyContributionInputEnvelope";
import { ContributionPaymentCreateOrConnectWithoutContributionInput } from "../inputs/ContributionPaymentCreateOrConnectWithoutContributionInput";
import { ContributionPaymentCreateWithoutContributionInput } from "../inputs/ContributionPaymentCreateWithoutContributionInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentCreateNestedManyWithoutContributionInput", {
  isAbstract: true
})
export class ContributionPaymentCreateNestedManyWithoutContributionInput {
  @TypeGraphQL.Field(_type => [ContributionPaymentCreateWithoutContributionInput], {
    nullable: true
  })
  create?: ContributionPaymentCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentCreateOrConnectWithoutContributionInput], {
    nullable: true
  })
  connectOrCreate?: ContributionPaymentCreateOrConnectWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateManyContributionInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionPaymentCreateManyContributionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionPaymentWhereUniqueInput[] | undefined;
}
