import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildActivityTypeWhereUniqueInput } from "../../../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;
}
