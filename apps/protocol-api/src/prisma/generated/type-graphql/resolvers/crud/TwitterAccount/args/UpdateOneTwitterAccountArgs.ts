import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterAccountUpdateInput } from "../../../inputs/TwitterAccountUpdateInput";
import { TwitterAccountWhereUniqueInput } from "../../../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTwitterAccountArgs {
  @TypeGraphQL.Field(_type => TwitterAccountUpdateInput, {
    nullable: false
  })
  data!: TwitterAccountUpdateInput;

  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterAccountWhereUniqueInput;
}
