import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutTwitter_accountInput } from "../inputs/GuildCreateWithoutTwitter_accountInput";
import { GuildUpdateWithoutTwitter_accountInput } from "../inputs/GuildUpdateWithoutTwitter_accountInput";

@TypeGraphQL.InputType("GuildUpsertWithoutTwitter_accountInput", {
  isAbstract: true
})
export class GuildUpsertWithoutTwitter_accountInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutTwitter_accountInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutTwitter_accountInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_accountInput, {
    nullable: false
  })
  create!: GuildCreateWithoutTwitter_accountInput;
}
