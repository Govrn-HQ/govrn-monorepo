import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateWithoutSender_userInput } from "../inputs/SplitPaymentCreateWithoutSender_userInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentCreateOrConnectWithoutSender_userInput", {
  isAbstract: true
})
export class SplitPaymentCreateOrConnectWithoutSender_userInput {
  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitPaymentCreateWithoutSender_userInput, {
    nullable: false
  })
  create!: SplitPaymentCreateWithoutSender_userInput;
}
