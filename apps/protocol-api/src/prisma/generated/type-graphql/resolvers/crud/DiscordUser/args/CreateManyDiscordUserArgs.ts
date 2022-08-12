import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DiscordUserCreateManyInput } from "../../../inputs/DiscordUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDiscordUserArgs {
  @TypeGraphQL.Field(_type => [DiscordUserCreateManyInput], {
    nullable: false
  })
  data!: DiscordUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
