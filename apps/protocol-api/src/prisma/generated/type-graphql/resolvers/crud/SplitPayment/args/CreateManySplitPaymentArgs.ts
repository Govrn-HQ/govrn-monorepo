import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentCreateManyInput } from "../../../inputs/SplitPaymentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySplitPaymentArgs {
  @TypeGraphQL.Field(_type => [SplitPaymentCreateManyInput], {
    nullable: false
  })
  data!: SplitPaymentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
