import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateWithoutSplit_contractInput } from "../inputs/SplitPaymentCreateWithoutSplit_contractInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentCreateOrConnectWithoutSplit_contractInput", {
  isAbstract: true
})
export class SplitPaymentCreateOrConnectWithoutSplit_contractInput {
  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitPaymentCreateWithoutSplit_contractInput, {
    nullable: false
  })
  create!: SplitPaymentCreateWithoutSplit_contractInput;
}
