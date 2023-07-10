import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentCreateInput } from "../../../inputs/SplitPaymentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSplitPaymentArgs {
  @TypeGraphQL.Field(_type => SplitPaymentCreateInput, {
    nullable: false
  })
  data!: SplitPaymentCreateInput;
}
