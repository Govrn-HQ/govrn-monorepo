import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterAccountCreateInput } from "../../../inputs/TwitterAccountCreateInput";
import { TwitterAccountUpdateInput } from "../../../inputs/TwitterAccountUpdateInput";
import { TwitterAccountWhereUniqueInput } from "../../../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTwitterAccountArgs {
  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterAccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterAccountCreateInput, {
    nullable: false
  })
  create!: TwitterAccountCreateInput;

  @TypeGraphQL.Field(_type => TwitterAccountUpdateInput, {
    nullable: false
  })
  update!: TwitterAccountUpdateInput;
}
