import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentWhereInput } from "../inputs/SplitPaymentWhereInput";

@TypeGraphQL.InputType("SplitPaymentRelationFilter", {
  isAbstract: true
})
export class SplitPaymentRelationFilter {
  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  is?: SplitPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  isNot?: SplitPaymentWhereInput | undefined;
}
