import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildActivityTypeUpdateInput } from "../../../inputs/GuildActivityTypeUpdateInput";
import { GuildActivityTypeWhereUniqueInput } from "../../../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateInput, {
    nullable: false
  })
  data!: GuildActivityTypeUpdateInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;
}
