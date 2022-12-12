import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildMembershipStatusWhereInput } from "../../../inputs/GuildMembershipStatusWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGuildMembershipStatusArgs {
  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereInput, {
    nullable: true
  })
  where?: GuildMembershipStatusWhereInput | undefined;
}
