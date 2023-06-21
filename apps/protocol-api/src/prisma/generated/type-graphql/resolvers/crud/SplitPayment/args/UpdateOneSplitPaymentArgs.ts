import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentUpdateInput } from "../../../inputs/SplitPaymentUpdateInput";
import { SplitPaymentWhereUniqueInput } from "../../../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSplitPaymentArgs {
  @TypeGraphQL.Field(_type => SplitPaymentUpdateInput, {
    nullable: false
  })
  data!: SplitPaymentUpdateInput;

  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;
}
