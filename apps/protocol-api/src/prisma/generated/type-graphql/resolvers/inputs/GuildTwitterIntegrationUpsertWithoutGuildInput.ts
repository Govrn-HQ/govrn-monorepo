import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildTwitterIntegrationCreateWithoutGuildInput } from "../inputs/GuildTwitterIntegrationCreateWithoutGuildInput";
import { GuildTwitterIntegrationUpdateWithoutGuildInput } from "../inputs/GuildTwitterIntegrationUpdateWithoutGuildInput";

@TypeGraphQL.InputType("GuildTwitterIntegrationUpsertWithoutGuildInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationUpsertWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: GuildTwitterIntegrationUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildTwitterIntegrationCreateWithoutGuildInput;
}
