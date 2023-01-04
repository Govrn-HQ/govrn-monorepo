import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildMembershipStatusCreateWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusCreateWithoutGuildUsersInput";
import { GuildMembershipStatusWhereUniqueInput } from "../inputs/GuildMembershipStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput", {
  isAbstract: true
})
export class GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput {
  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildMembershipStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateWithoutGuildUsersInput, {
    nullable: false
  })
  create!: GuildMembershipStatusCreateWithoutGuildUsersInput;
}
