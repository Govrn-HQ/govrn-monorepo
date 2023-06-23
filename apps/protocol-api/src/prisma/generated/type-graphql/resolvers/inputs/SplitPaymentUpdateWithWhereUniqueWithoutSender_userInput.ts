import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentUpdateWithoutSender_userInput } from "../inputs/SplitPaymentUpdateWithoutSender_userInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentUpdateWithWhereUniqueWithoutSender_userInput", {
  isAbstract: true
})
export class SplitPaymentUpdateWithWhereUniqueWithoutSender_userInput {
  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitPaymentUpdateWithoutSender_userInput, {
    nullable: false
  })
  data!: SplitPaymentUpdateWithoutSender_userInput;
}
