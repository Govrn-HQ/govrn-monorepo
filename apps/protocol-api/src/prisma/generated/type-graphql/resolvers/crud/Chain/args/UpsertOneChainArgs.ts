import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainCreateInput } from "../../../inputs/ChainCreateInput";
import { ChainUpdateInput } from "../../../inputs/ChainUpdateInput";
import { ChainWhereUniqueInput } from "../../../inputs/ChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneChainArgs {
  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: false
  })
  where!: ChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChainCreateInput, {
    nullable: false
  })
  create!: ChainCreateInput;

  @TypeGraphQL.Field(_type => ChainUpdateInput, {
    nullable: false
  })
  update!: ChainUpdateInput;
}
