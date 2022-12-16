import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildMembershipStatusCreateWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusCreateWithoutGuildUsersInput";
import { GuildMembershipStatusUpdateWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusUpdateWithoutGuildUsersInput";

@TypeGraphQL.InputType("GuildMembershipStatusUpsertWithoutGuildUsersInput", {
  isAbstract: true
})
export class GuildMembershipStatusUpsertWithoutGuildUsersInput {
  @TypeGraphQL.Field(_type => GuildMembershipStatusUpdateWithoutGuildUsersInput, {
    nullable: false
  })
  update!: GuildMembershipStatusUpdateWithoutGuildUsersInput;

  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateWithoutGuildUsersInput, {
    nullable: false
  })
  create!: GuildMembershipStatusCreateWithoutGuildUsersInput;
}
