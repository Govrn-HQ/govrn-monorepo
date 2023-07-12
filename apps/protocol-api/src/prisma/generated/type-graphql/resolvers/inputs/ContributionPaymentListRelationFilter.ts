import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentWhereInput } from "../inputs/ContributionPaymentWhereInput";

@TypeGraphQL.InputType("ContributionPaymentListRelationFilter", {
  isAbstract: true
})
export class ContributionPaymentListRelationFilter {
  @TypeGraphQL.Field(_type => ContributionPaymentWhereInput, {
    nullable: true
  })
  every?: ContributionPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentWhereInput, {
    nullable: true
  })
  some?: ContributionPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentWhereInput, {
    nullable: true
  })
  none?: ContributionPaymentWhereInput | undefined;
}
