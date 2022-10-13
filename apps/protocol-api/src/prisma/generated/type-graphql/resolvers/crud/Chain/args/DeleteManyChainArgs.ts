import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainWhereInput } from "../../../inputs/ChainWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyChainArgs {
  @TypeGraphQL.Field(_type => ChainWhereInput, {
    nullable: true
  })
  where?: ChainWhereInput | undefined;
}
