import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeUpdateWithoutGuildInput } from "../inputs/GuildActivityTypeUpdateWithoutGuildInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: GuildActivityTypeUpdateWithoutGuildInput;
}
