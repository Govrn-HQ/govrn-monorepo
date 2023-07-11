import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateManyContributionInput } from "../inputs/ContributionPaymentCreateManyContributionInput";

@TypeGraphQL.InputType("ContributionPaymentCreateManyContributionInputEnvelope", {
  isAbstract: true
})
export class ContributionPaymentCreateManyContributionInputEnvelope {
  @TypeGraphQL.Field(_type => [ContributionPaymentCreateManyContributionInput], {
    nullable: false
  })
  data!: ContributionPaymentCreateManyContributionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
