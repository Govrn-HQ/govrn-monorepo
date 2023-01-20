import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedOneWithoutUsersInput } from "../inputs/GuildCreateNestedOneWithoutUsersInput";
import { GuildImportCreateNestedOneWithoutUsersInput } from "../inputs/GuildImportCreateNestedOneWithoutUsersInput";
import { GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput } from "../inputs/GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput";
import { UserCreateNestedOneWithoutGuild_usersInput } from "../inputs/UserCreateNestedOneWithoutGuild_usersInput";

@TypeGraphQL.InputType("GuildUserCreateInput", {
  isAbstract: true
})
export class GuildUserCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutGuild_usersInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutGuild_usersInput;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field(_type => GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput, {
    nullable: true
  })
  membershipStatus?: GuildMembershipStatusCreateNestedOneWithoutGuildUsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  favorite?: boolean | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateNestedOneWithoutUsersInput, {
    nullable: true
  })
  guild_import?: GuildImportCreateNestedOneWithoutUsersInput | undefined;
}
