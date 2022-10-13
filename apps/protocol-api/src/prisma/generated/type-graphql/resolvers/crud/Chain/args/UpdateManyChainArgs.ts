import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainUpdateManyMutationInput } from "../../../inputs/ChainUpdateManyMutationInput";
import { ChainWhereInput } from "../../../inputs/ChainWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChainArgs {
  @TypeGraphQL.Field(_type => ChainUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChainUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChainWhereInput, {
    nullable: true
  })
  where?: ChainWhereInput | undefined;
}
