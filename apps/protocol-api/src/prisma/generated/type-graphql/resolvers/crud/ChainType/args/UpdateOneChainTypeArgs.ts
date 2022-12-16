import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainTypeUpdateInput } from "../../../inputs/ChainTypeUpdateInput";
import { ChainTypeWhereUniqueInput } from "../../../inputs/ChainTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneChainTypeArgs {
  @TypeGraphQL.Field(_type => ChainTypeUpdateInput, {
    nullable: false
  })
  data!: ChainTypeUpdateInput;

  @TypeGraphQL.Field(_type => ChainTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ChainTypeWhereUniqueInput;
}
