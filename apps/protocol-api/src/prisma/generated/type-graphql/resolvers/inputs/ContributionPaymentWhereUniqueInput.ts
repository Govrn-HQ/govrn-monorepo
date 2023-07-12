import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentContribution_idSplit_payment_idCompoundUniqueInput } from "../inputs/ContributionPaymentContribution_idSplit_payment_idCompoundUniqueInput";

@TypeGraphQL.InputType("ContributionPaymentWhereUniqueInput", {
  isAbstract: true
})
export class ContributionPaymentWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentContribution_idSplit_payment_idCompoundUniqueInput, {
    nullable: true
  })
  contribution_id_split_payment_id?: ContributionPaymentContribution_idSplit_payment_idCompoundUniqueInput | undefined;
}
