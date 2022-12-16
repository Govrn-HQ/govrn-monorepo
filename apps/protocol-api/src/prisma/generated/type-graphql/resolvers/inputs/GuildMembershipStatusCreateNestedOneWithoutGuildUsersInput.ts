import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput";
import { GuildMembershipStatusCreateWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusCreateWithoutGuildUsersInput";
import { GuildMembershipStatusWhereUniqueInput } from "../inputs/GuildMembershipStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput", {
  isAbstract: true
})
export class GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput {
  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateWithoutGuildUsersInput, {
    nullable: true
  })
  create?: GuildMembershipStatusCreateWithoutGuildUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput, {
    nullable: true
  })
  connectOrCreate?: GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildMembershipStatusWhereUniqueInput | undefined;
}
