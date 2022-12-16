import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildUpdateInput } from "../../../inputs/GuildUpdateInput";
import { GuildWhereUniqueInput } from "../../../inputs/GuildWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuildArgs {
  @TypeGraphQL.Field(_type => GuildUpdateInput, {
    nullable: false
  })
  data!: GuildUpdateInput;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;
}
