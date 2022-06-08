import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateWithoutGuildInput } from "../inputs/GuildActivityTypeCreateWithoutGuildInput";
import { GuildActivityTypeUpdateWithoutGuildInput } from "../inputs/GuildActivityTypeUpdateWithoutGuildInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class GuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: GuildActivityTypeUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildActivityTypeCreateWithoutGuildInput;
}
