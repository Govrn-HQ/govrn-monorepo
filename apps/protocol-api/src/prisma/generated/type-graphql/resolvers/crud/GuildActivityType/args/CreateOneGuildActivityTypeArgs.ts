import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildActivityTypeCreateInput } from "../../../inputs/GuildActivityTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuildActivityTypeArgs {
  @TypeGraphQL.Field(_type => GuildActivityTypeCreateInput, {
    nullable: false
  })
  data!: GuildActivityTypeCreateInput;
}
