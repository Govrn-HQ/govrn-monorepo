import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusUpdateManyMutationInput } from "../../../inputs/GuildMembershipStatusUpdateManyMutationInput";
import { GuildMembershipStatusWhereInput } from "../../../inputs/GuildMembershipStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGuildMembershipStatusArgs {
  @TypeGraphQL.Field(_type => GuildMembershipStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildMembershipStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereInput, {
    nullable: true
  })
  where?: GuildMembershipStatusWhereInput | undefined;
}
