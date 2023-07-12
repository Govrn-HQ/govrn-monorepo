import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateManySplit_paymentInputEnvelope } from "../inputs/ContributionPaymentCreateManySplit_paymentInputEnvelope";
import { ContributionPaymentCreateOrConnectWithoutSplit_paymentInput } from "../inputs/ContributionPaymentCreateOrConnectWithoutSplit_paymentInput";
import { ContributionPaymentCreateWithoutSplit_paymentInput } from "../inputs/ContributionPaymentCreateWithoutSplit_paymentInput";
import { ContributionPaymentScalarWhereInput } from "../inputs/ContributionPaymentScalarWhereInput";
import { ContributionPaymentUpdateManyWithWhereWithoutSplit_paymentInput } from "../inputs/ContributionPaymentUpdateManyWithWhereWithoutSplit_paymentInput";
import { ContributionPaymentUpdateWithWhereUniqueWithoutSplit_paymentInput } from "../inputs/ContributionPaymentUpdateWithWhereUniqueWithoutSplit_paymentInput";
import { ContributionPaymentUpsertWithWhereUniqueWithoutSplit_paymentInput } from "../inputs/ContributionPaymentUpsertWithWhereUniqueWithoutSplit_paymentInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput", {
  isAbstract: true
})
export class ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput {
  @TypeGraphQL.Field(_type => [ContributionPaymentCreateWithoutSplit_paymentInput], {
    nullable: true
  })
  create?: ContributionPaymentCreateWithoutSplit_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentCreateOrConnectWithoutSplit_paymentInput], {
    nullable: true
  })
  connectOrCreate?: ContributionPaymentCreateOrConnectWithoutSplit_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentUpsertWithWhereUniqueWithoutSplit_paymentInput], {
    nullable: true
  })
  upsert?: ContributionPaymentUpsertWithWhereUniqueWithoutSplit_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateManySplit_paymentInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionPaymentCreateManySplit_paymentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentWhereUniqueInput], {
    nullable: true
  })
  set?: ContributionPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ContributionPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentWhereUniqueInput], {
    nullable: true
  })
  delete?: ContributionPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentUpdateWithWhereUniqueWithoutSplit_paymentInput], {
    nullable: true
  })
  update?: ContributionPaymentUpdateWithWhereUniqueWithoutSplit_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentUpdateManyWithWhereWithoutSplit_paymentInput], {
    nullable: true
  })
  updateMany?: ContributionPaymentUpdateManyWithWhereWithoutSplit_paymentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContributionPaymentScalarWhereInput[] | undefined;
}
