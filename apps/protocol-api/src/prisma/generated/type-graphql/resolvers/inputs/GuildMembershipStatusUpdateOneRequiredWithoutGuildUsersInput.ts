import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput";
import { GuildMembershipStatusCreateWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusCreateWithoutGuildUsersInput";
import { GuildMembershipStatusUpdateWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusUpdateWithoutGuildUsersInput";
import { GuildMembershipStatusUpsertWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusUpsertWithoutGuildUsersInput";
import { GuildMembershipStatusWhereUniqueInput } from "../inputs/GuildMembershipStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildMembershipStatusUpdateOneRequiredWithoutGuildUsersInput", {
  isAbstract: true
})
export class GuildMembershipStatusUpdateOneRequiredWithoutGuildUsersInput {
  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateWithoutGuildUsersInput, {
    nullable: true
  })
  create?: GuildMembershipStatusCreateWithoutGuildUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput, {
    nullable: true
  })
  connectOrCreate?: GuildMembershipStatusCreateOrConnectWithoutGuildUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusUpsertWithoutGuildUsersInput, {
    nullable: true
  })
  upsert?: GuildMembershipStatusUpsertWithoutGuildUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildMembershipStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildMembershipStatusUpdateWithoutGuildUsersInput, {
    nullable: true
  })
  update?: GuildMembershipStatusUpdateWithoutGuildUsersInput | undefined;
}
