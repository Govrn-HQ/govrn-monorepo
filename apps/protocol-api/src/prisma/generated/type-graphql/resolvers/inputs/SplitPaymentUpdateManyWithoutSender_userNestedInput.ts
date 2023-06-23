import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateManySender_userInputEnvelope } from "../inputs/SplitPaymentCreateManySender_userInputEnvelope";
import { SplitPaymentCreateOrConnectWithoutSender_userInput } from "../inputs/SplitPaymentCreateOrConnectWithoutSender_userInput";
import { SplitPaymentCreateWithoutSender_userInput } from "../inputs/SplitPaymentCreateWithoutSender_userInput";
import { SplitPaymentScalarWhereInput } from "../inputs/SplitPaymentScalarWhereInput";
import { SplitPaymentUpdateManyWithWhereWithoutSender_userInput } from "../inputs/SplitPaymentUpdateManyWithWhereWithoutSender_userInput";
import { SplitPaymentUpdateWithWhereUniqueWithoutSender_userInput } from "../inputs/SplitPaymentUpdateWithWhereUniqueWithoutSender_userInput";
import { SplitPaymentUpsertWithWhereUniqueWithoutSender_userInput } from "../inputs/SplitPaymentUpsertWithWhereUniqueWithoutSender_userInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentUpdateManyWithoutSender_userNestedInput", {
  isAbstract: true
})
export class SplitPaymentUpdateManyWithoutSender_userNestedInput {
  @TypeGraphQL.Field(_type => [SplitPaymentCreateWithoutSender_userInput], {
    nullable: true
  })
  create?: SplitPaymentCreateWithoutSender_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentCreateOrConnectWithoutSender_userInput], {
    nullable: true
  })
  connectOrCreate?: SplitPaymentCreateOrConnectWithoutSender_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentUpsertWithWhereUniqueWithoutSender_userInput], {
    nullable: true
  })
  upsert?: SplitPaymentUpsertWithWhereUniqueWithoutSender_userInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCreateManySender_userInputEnvelope, {
    nullable: true
  })
  createMany?: SplitPaymentCreateManySender_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  set?: SplitPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SplitPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  delete?: SplitPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: SplitPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentUpdateWithWhereUniqueWithoutSender_userInput], {
    nullable: true
  })
  update?: SplitPaymentUpdateWithWhereUniqueWithoutSender_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentUpdateManyWithWhereWithoutSender_userInput], {
    nullable: true
  })
  updateMany?: SplitPaymentUpdateManyWithWhereWithoutSender_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SplitPaymentScalarWhereInput[] | undefined;
}
