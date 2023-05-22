import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutTwitter_integrationInput } from "../inputs/GuildCreateWithoutTwitter_integrationInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateOrConnectWithoutTwitter_integrationInput", {
  isAbstract: true
})
export class GuildCreateOrConnectWithoutTwitter_integrationInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_integrationInput, {
    nullable: false
  })
  create!: GuildCreateWithoutTwitter_integrationInput;
}
