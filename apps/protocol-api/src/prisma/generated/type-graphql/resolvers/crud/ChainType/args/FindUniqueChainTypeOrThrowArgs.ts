import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainTypeWhereUniqueInput } from "../../../inputs/ChainTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueChainTypeOrThrowArgs {
  @TypeGraphQL.Field(_type => ChainTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ChainTypeWhereUniqueInput;
}
