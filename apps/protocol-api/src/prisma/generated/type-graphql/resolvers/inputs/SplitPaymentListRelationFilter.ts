import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentWhereInput } from "../inputs/SplitPaymentWhereInput";

@TypeGraphQL.InputType("SplitPaymentListRelationFilter", {
  isAbstract: true
})
export class SplitPaymentListRelationFilter {
  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  every?: SplitPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  some?: SplitPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  none?: SplitPaymentWhereInput | undefined;
}
