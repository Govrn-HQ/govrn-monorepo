import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildUserUpdateInput } from "../../../inputs/GuildUserUpdateInput";
import { GuildUserWhereUniqueInput } from "../../../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGuildUserArgs {
  @TypeGraphQL.Field(_type => GuildUserUpdateInput, {
    nullable: false
  })
  data!: GuildUserUpdateInput;

  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;
}
