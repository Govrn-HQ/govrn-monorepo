import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeGuild_idActivity_type_idCompoundUniqueInput } from "../inputs/GuildActivityTypeGuild_idActivity_type_idCompoundUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeWhereUniqueInput", {
  isAbstract: true
})
export class GuildActivityTypeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeGuild_idActivity_type_idCompoundUniqueInput, {
    nullable: true
  })
  guild_id_activity_type_id?: GuildActivityTypeGuild_idActivity_type_idCompoundUniqueInput | undefined;
}
