import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentUpdateManyMutationInput } from "../../../inputs/SplitPaymentUpdateManyMutationInput";
import { SplitPaymentWhereInput } from "../../../inputs/SplitPaymentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySplitPaymentArgs {
  @TypeGraphQL.Field(_type => SplitPaymentUpdateManyMutationInput, {
    nullable: false
  })
  data!: SplitPaymentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  where?: SplitPaymentWhereInput | undefined;
}
