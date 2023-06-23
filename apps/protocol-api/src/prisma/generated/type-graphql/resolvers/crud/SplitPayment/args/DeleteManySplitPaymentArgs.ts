import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentWhereInput } from "../../../inputs/SplitPaymentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySplitPaymentArgs {
  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  where?: SplitPaymentWhereInput | undefined;
}
