import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitContractUpdateManyMutationInput } from "../../../inputs/SplitContractUpdateManyMutationInput";
import { SplitContractWhereInput } from "../../../inputs/SplitContractWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySplitContractArgs {
  @TypeGraphQL.Field(_type => SplitContractUpdateManyMutationInput, {
    nullable: false
  })
  data!: SplitContractUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  where?: SplitContractWhereInput | undefined;
}
