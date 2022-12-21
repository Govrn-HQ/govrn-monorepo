import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainWhereUniqueInput } from "../../../inputs/ChainWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueChainOrThrowArgs {
  @TypeGraphQL.Field(_type => ChainWhereUniqueInput, {
    nullable: false
  })
  where!: ChainWhereUniqueInput;
}
