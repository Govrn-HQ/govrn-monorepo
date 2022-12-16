import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildCreateInput } from "../../../inputs/GuildCreateInput";
import { GuildUpdateInput } from "../../../inputs/GuildUpdateInput";
import { GuildWhereUniqueInput } from "../../../inputs/GuildWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGuildArgs {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateInput, {
    nullable: false
  })
  create!: GuildCreateInput;

  @TypeGraphQL.Field(_type => GuildUpdateInput, {
    nullable: false
  })
  update!: GuildUpdateInput;
}
