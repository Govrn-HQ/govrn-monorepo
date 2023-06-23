import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentUpdateWithoutSplit_contractInput } from "../inputs/SplitPaymentUpdateWithoutSplit_contractInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentUpdateWithWhereUniqueWithoutSplit_contractInput", {
  isAbstract: true
})
export class SplitPaymentUpdateWithWhereUniqueWithoutSplit_contractInput {
  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitPaymentUpdateWithoutSplit_contractInput, {
    nullable: false
  })
  data!: SplitPaymentUpdateWithoutSplit_contractInput;
}
