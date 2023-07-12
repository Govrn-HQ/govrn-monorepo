import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateManySplit_paymentInput } from "../inputs/ContributionPaymentCreateManySplit_paymentInput";

@TypeGraphQL.InputType("ContributionPaymentCreateManySplit_paymentInputEnvelope", {
  isAbstract: true
})
export class ContributionPaymentCreateManySplit_paymentInputEnvelope {
  @TypeGraphQL.Field(_type => [ContributionPaymentCreateManySplit_paymentInput], {
    nullable: false
  })
  data!: ContributionPaymentCreateManySplit_paymentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
