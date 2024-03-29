import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterAccountCreateInput } from "../../../inputs/TwitterAccountCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTwitterAccountArgs {
  @TypeGraphQL.Field(_type => TwitterAccountCreateInput, {
    nullable: false
  })
  data!: TwitterAccountCreateInput;
}
