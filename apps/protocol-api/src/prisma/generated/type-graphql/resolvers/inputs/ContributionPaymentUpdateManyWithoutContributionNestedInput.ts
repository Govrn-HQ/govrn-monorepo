import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateManyContributionInputEnvelope } from "../inputs/ContributionPaymentCreateManyContributionInputEnvelope";
import { ContributionPaymentCreateOrConnectWithoutContributionInput } from "../inputs/ContributionPaymentCreateOrConnectWithoutContributionInput";
import { ContributionPaymentCreateWithoutContributionInput } from "../inputs/ContributionPaymentCreateWithoutContributionInput";
import { ContributionPaymentScalarWhereInput } from "../inputs/ContributionPaymentScalarWhereInput";
import { ContributionPaymentUpdateManyWithWhereWithoutContributionInput } from "../inputs/ContributionPaymentUpdateManyWithWhereWithoutContributionInput";
import { ContributionPaymentUpdateWithWhereUniqueWithoutContributionInput } from "../inputs/ContributionPaymentUpdateWithWhereUniqueWithoutContributionInput";
import { ContributionPaymentUpsertWithWhereUniqueWithoutContributionInput } from "../inputs/ContributionPaymentUpsertWithWhereUniqueWithoutContributionInput";
import { ContributionPaymentWhereUniqueInput } from "../inputs/ContributionPaymentWhereUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentUpdateManyWithoutContributionNestedInput", {
  isAbstract: true
})
export class ContributionPaymentUpdateManyWithoutContributionNestedInput {
  @TypeGraphQL.Field(_type => [ContributionPaymentCreateWithoutContributionInput], {
    nullable: true
  })
  create?: ContributionPaymentCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentCreateOrConnectWithoutContributionInput], {
    nullable: true
  })
  connectOrCreate?: ContributionPaymentCreateOrConnectWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentUpsertWithWhereUniqueWithoutContributionInput], {
    nullable: true
  })
  upsert?: ContributionPaymentUpsertWithWhereUniqueWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateManyContributionInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionPaymentCreateManyContributionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ContributionPaymentUpdateWithWhereUniqueWithoutContributionInput], {
    nullable: true
  })
  update?: ContributionPaymentUpdateWithWhereUniqueWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentUpdateManyWithWhereWithoutContributionInput], {
    nullable: true
  })
  updateMany?: ContributionPaymentUpdateManyWithWhereWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContributionPaymentScalarWhereInput[] | undefined;
}
