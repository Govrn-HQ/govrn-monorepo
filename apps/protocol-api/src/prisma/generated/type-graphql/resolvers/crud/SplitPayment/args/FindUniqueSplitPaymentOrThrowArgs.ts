import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentWhereUniqueInput } from "../../../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSplitPaymentOrThrowArgs {
  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: false
  })
  where!: SplitPaymentWhereUniqueInput;
}
