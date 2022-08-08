import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildUserCreateInput } from "../../../inputs/GuildUserCreateInput";
import { GuildUserUpdateInput } from "../../../inputs/GuildUserUpdateInput";
import { GuildUserWhereUniqueInput } from "../../../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGuildUserArgs {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserCreateInput, {
    nullable: false
  })
  create!: GuildUserCreateInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateInput, {
    nullable: false
  })
  update!: GuildUserUpdateInput;
}
