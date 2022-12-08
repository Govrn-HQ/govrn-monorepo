import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildVerificationStatusCreateWithoutGuildInput } from "../inputs/GuildVerificationStatusCreateWithoutGuildInput";
import { GuildVerificationStatusUpdateWithoutGuildInput } from "../inputs/GuildVerificationStatusUpdateWithoutGuildInput";

@TypeGraphQL.InputType("GuildVerificationStatusUpsertWithoutGuildInput", {
  isAbstract: true
})
export class GuildVerificationStatusUpsertWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildVerificationStatusUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: GuildVerificationStatusUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => GuildVerificationStatusCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildVerificationStatusCreateWithoutGuildInput;
}
