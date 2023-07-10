import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateManySender_userInputEnvelope } from "../inputs/SplitPaymentCreateManySender_userInputEnvelope";
import { SplitPaymentCreateOrConnectWithoutSender_userInput } from "../inputs/SplitPaymentCreateOrConnectWithoutSender_userInput";
import { SplitPaymentCreateWithoutSender_userInput } from "../inputs/SplitPaymentCreateWithoutSender_userInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentCreateNestedManyWithoutSender_userInput", {
  isAbstract: true
})
export class SplitPaymentCreateNestedManyWithoutSender_userInput {
  @TypeGraphQL.Field(_type => [SplitPaymentCreateWithoutSender_userInput], {
    nullable: true
  })
  create?: SplitPaymentCreateWithoutSender_userInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentCreateOrConnectWithoutSender_userInput], {
    nullable: true
  })
  connectOrCreate?: SplitPaymentCreateOrConnectWithoutSender_userInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCreateManySender_userInputEnvelope, {
    nullable: true
  })
  createMany?: SplitPaymentCreateManySender_userInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: SplitPaymentWhereUniqueInput[] | undefined;
}
