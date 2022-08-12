import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterUserCreateManyInput } from "../../../inputs/TwitterUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTwitterUserArgs {
  @TypeGraphQL.Field(_type => [TwitterUserCreateManyInput], {
    nullable: false
  })
  data!: TwitterUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
