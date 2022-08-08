import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterUserUpdateInput } from "../../../inputs/TwitterUserUpdateInput";
import { TwitterUserWhereUniqueInput } from "../../../inputs/TwitterUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserUpdateInput, {
    nullable: false
  })
  data!: TwitterUserUpdateInput;

  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterUserWhereUniqueInput;
}
