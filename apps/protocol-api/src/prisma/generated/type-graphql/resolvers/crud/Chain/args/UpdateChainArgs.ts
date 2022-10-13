import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainUpdateInput } from "../../../inputs/ChainUpdateInput";
import { ChainWhereUniqueInput } from "../../../inputs/ChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateChainArgs {
  @TypeGraphQL.Field(_type => ChainUpdateInput, {
    nullable: false
  })
  data!: ChainUpdateInput;

  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: false
  })
  where!: ChainWhereUniqueInput;
}
