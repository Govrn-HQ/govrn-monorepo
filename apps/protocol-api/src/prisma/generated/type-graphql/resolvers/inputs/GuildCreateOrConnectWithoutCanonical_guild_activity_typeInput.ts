import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutCanonical_guild_activity_typeInput } from "../inputs/GuildCreateWithoutCanonical_guild_activity_typeInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateOrConnectWithoutCanonical_guild_activity_typeInput", {
  isAbstract: true
})
export class GuildCreateOrConnectWithoutCanonical_guild_activity_typeInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutCanonical_guild_activity_typeInput, {
    nullable: false
  })
  create!: GuildCreateWithoutCanonical_guild_activity_typeInput;
}
