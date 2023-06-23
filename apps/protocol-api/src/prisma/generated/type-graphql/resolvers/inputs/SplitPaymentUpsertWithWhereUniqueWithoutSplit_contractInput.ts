import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateWithoutSplit_contractInput } from "../inputs/SplitPaymentCreateWithoutSplit_contractInput";
import { SplitPaymentUpdateWithoutSplit_contractInput } from "../inputs/SplitPaymentUpdateWithoutSplit_contractInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentUpsertWithWhereUniqueWithoutSplit_contractInput", {
  isAbstract: true
})
export class SplitPaymentUpsertWithWhereUniqueWithoutSplit_contractInput {
  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitPaymentUpdateWithoutSplit_contractInput, {
    nullable: false
  })
  update!: SplitPaymentUpdateWithoutSplit_contractInput;

  @TypeGraphQL.Field(_type => SplitPaymentCreateWithoutSplit_contractInput, {
    nullable: false
  })
  create!: SplitPaymentCreateWithoutSplit_contractInput;
}
