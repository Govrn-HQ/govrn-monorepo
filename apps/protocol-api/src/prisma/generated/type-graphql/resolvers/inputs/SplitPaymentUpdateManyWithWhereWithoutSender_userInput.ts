import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentScalarWhereInput } from "../inputs/SplitPaymentScalarWhereInput";
import { SplitPaymentUpdateManyMutationInput } from "../inputs/SplitPaymentUpdateManyMutationInput";

@TypeGraphQL.InputType("SplitPaymentUpdateManyWithWhereWithoutSender_userInput", {
  isAbstract: true
})
export class SplitPaymentUpdateManyWithWhereWithoutSender_userInput {
  @TypeGraphQL.Field(_type => SplitPaymentScalarWhereInput, {
    nullable: false
  })
  where!: SplitPaymentScalarWhereInput;

  @TypeGraphQL.Field(_type => SplitPaymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: SplitPaymentUpdateManyMutationInput;
}
