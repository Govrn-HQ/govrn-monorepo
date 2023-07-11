import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateManySplit_paymentInputEnvelope } from "../inputs/ContributionPaymentCreateManySplit_paymentInputEnvelope";
import { ContributionPaymentCreateOrConnectWithoutSplit_paymentInput } from "../inputs/ContributionPaymentCreateOrConnectWithoutSplit_paymentInput";
import { ContributionPaymentCreateWithoutSplit_paymentInput } from "../inputs/ContributionPaymentCreateWithoutSplit_paymentInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentCreateNestedManyWithoutSplit_paymentInput", {
  isAbstract: true
})
export class ContributionPaymentCreateNestedManyWithoutSplit_paymentInput {
  @TypeGraphQL.Field(_type => [ContributionPaymentCreateWithoutSplit_paymentInput], {
    nullable: true
  })
  create?: ContributionPaymentCreateWithoutSplit_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentCreateOrConnectWithoutSplit_paymentInput], {
    nullable: true
  })
  connectOrCreate?: ContributionPaymentCreateOrConnectWithoutSplit_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateManySplit_paymentInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionPaymentCreateManySplit_paymentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionPaymentWhereUniqueInput[] | undefined;
}
