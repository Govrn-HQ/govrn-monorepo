import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutCanonical_guild_activity_typeInput } from "../inputs/GuildCreateOrConnectWithoutCanonical_guild_activity_typeInput";
import { GuildCreateWithoutCanonical_guild_activity_typeInput } from "../inputs/GuildCreateWithoutCanonical_guild_activity_typeInput";
import { GuildUpdateWithoutCanonical_guild_activity_typeInput } from "../inputs/GuildUpdateWithoutCanonical_guild_activity_typeInput";
import { GuildUpsertWithoutCanonical_guild_activity_typeInput } from "../inputs/GuildUpsertWithoutCanonical_guild_activity_typeInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateOneRequiredWithoutCanonical_guild_activity_typeNestedInput", {
  isAbstract: true
})
export class GuildUpdateOneRequiredWithoutCanonical_guild_activity_typeNestedInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutCanonical_guild_activity_typeInput, {
    nullable: true
  })
  create?: GuildCreateWithoutCanonical_guild_activity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutCanonical_guild_activity_typeInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutCanonical_guild_activity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutCanonical_guild_activity_typeInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutCanonical_guild_activity_typeInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutCanonical_guild_activity_typeInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutCanonical_guild_activity_typeInput | undefined;
}
