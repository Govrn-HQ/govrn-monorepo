import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentCreateInput } from "../../../inputs/SplitPaymentCreateInput";
import { SplitPaymentUpdateInput } from "../../../inputs/SplitPaymentUpdateInput";
import { SplitPaymentWhereUniqueInput } from "../../../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSplitPaymentArgs {
  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;

  @TypeGraphQL.Field(_type => SplitPaymentCreateInput, {
    nullable: false
  })
  create!: SplitPaymentCreateInput;

  @TypeGraphQL.Field(_type => SplitPaymentUpdateInput, {
    nullable: false
  })
  update!: SplitPaymentUpdateInput;
}
