import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutContributionsInput } from "../inputs/GuildCreateWithoutContributionsInput";
import { GuildUpdateWithoutContributionsInput } from "../inputs/GuildUpdateWithoutContributionsInput";

@TypeGraphQL.InputType("GuildUpsertWithoutContributionsInput", {
  isAbstract: true
})
export class GuildUpsertWithoutContributionsInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutContributionsInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutContributionsInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutContributionsInput, {
    nullable: false
  })
  create!: GuildCreateWithoutContributionsInput;
}
