import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterAccountWhereUniqueInput } from "../../../inputs/TwitterAccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTwitterAccountOrThrowArgs {
  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterAccountWhereUniqueInput;
}
