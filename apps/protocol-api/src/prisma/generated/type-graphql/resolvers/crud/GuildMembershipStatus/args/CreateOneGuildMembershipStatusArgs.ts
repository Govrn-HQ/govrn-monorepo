import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusCreateInput } from "../../../inputs/GuildMembershipStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGuildMembershipStatusArgs {
  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateInput, {
    nullable: false
  })
  data!: GuildMembershipStatusCreateInput;
}
