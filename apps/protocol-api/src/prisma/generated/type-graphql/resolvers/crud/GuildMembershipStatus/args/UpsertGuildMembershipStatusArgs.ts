import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusCreateInput } from "../../../inputs/GuildMembershipStatusCreateInput";
import { GuildMembershipStatusUpdateInput } from "../../../inputs/GuildMembershipStatusUpdateInput";
import { GuildMembershipStatusWhereUniqueInput } from "../../../inputs/GuildMembershipStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGuildMembershipStatusArgs {
  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildMembershipStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateInput, {
    nullable: false
  })
  create!: GuildMembershipStatusCreateInput;

  @TypeGraphQL.Field(_type => GuildMembershipStatusUpdateInput, {
    nullable: false
  })
  update!: GuildMembershipStatusUpdateInput;
}
