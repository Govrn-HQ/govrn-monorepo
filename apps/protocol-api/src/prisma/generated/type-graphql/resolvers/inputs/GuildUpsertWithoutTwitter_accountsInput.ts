import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutTwitter_accountsInput } from "../inputs/GuildCreateWithoutTwitter_accountsInput";
import { GuildUpdateWithoutTwitter_accountsInput } from "../inputs/GuildUpdateWithoutTwitter_accountsInput";

@TypeGraphQL.InputType("GuildUpsertWithoutTwitter_accountsInput", {
  isAbstract: true
})
export class GuildUpsertWithoutTwitter_accountsInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutTwitter_accountsInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutTwitter_accountsInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_accountsInput, {
    nullable: false
  })
  create!: GuildCreateWithoutTwitter_accountsInput;
}
