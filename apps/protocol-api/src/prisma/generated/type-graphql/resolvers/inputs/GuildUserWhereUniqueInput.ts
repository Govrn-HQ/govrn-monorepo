import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserUser_idGuild_idMembership_status_idCompoundUniqueInput } from "../inputs/GuildUserUser_idGuild_idMembership_status_idCompoundUniqueInput";

@TypeGraphQL.InputType("GuildUserWhereUniqueInput", {
  isAbstract: true
})
export class GuildUserWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => GuildUserUser_idGuild_idMembership_status_idCompoundUniqueInput, {
    nullable: true
  })
  user_id_guild_id_membership_status_id?: GuildUserUser_idGuild_idMembership_status_idCompoundUniqueInput | undefined;
}
