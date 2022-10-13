import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainCreateManyInput } from "../../../inputs/ChainCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChainArgs {
  @TypeGraphQL.Field(_type => [ChainCreateManyInput], {
    nullable: false
  })
  data!: ChainCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
