import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainTypeWhereInput } from "../../../inputs/ChainTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyChainTypeArgs {
  @TypeGraphQL.Field(_type => ChainTypeWhereInput, {
    nullable: true
  })
  where?: ChainTypeWhereInput | undefined;
}
