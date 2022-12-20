import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusUpdateInput } from "../../../inputs/GuildMembershipStatusUpdateInput";
import { GuildMembershipStatusWhereUniqueInput } from "../../../inputs/GuildMembershipStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGuildMembershipStatusArgs {
  @TypeGraphQL.Field(_type => GuildMembershipStatusUpdateInput, {
    nullable: false
  })
  data!: GuildMembershipStatusUpdateInput;

  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildMembershipStatusWhereUniqueInput;
}
