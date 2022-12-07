import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusWhereUniqueInput } from "../../../inputs/GuildMembershipStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGuildMembershipStatusArgs {
  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildMembershipStatusWhereUniqueInput;
}
