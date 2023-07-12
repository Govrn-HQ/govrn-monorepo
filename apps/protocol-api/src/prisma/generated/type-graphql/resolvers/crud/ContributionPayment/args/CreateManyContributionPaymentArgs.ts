import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionPaymentCreateManyInput } from "../../../inputs/ContributionPaymentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyContributionPaymentArgs {
  @TypeGraphQL.Field(_type => [ContributionPaymentCreateManyInput], {
    nullable: false
  })
  data!: ContributionPaymentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
