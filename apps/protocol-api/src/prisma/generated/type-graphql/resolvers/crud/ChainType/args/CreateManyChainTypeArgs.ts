import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChainTypeCreateManyInput } from "../../../inputs/ChainTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChainTypeArgs {
  @TypeGraphQL.Field(_type => [ChainTypeCreateManyInput], {
    nullable: false
  })
  data!: ChainTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
