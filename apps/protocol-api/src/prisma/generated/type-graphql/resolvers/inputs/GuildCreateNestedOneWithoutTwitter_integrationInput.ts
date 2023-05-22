import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutTwitter_integrationInput } from "../inputs/GuildCreateOrConnectWithoutTwitter_integrationInput";
import { GuildCreateWithoutTwitter_integrationInput } from "../inputs/GuildCreateWithoutTwitter_integrationInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedOneWithoutTwitter_integrationInput", {
  isAbstract: true
})
export class GuildCreateNestedOneWithoutTwitter_integrationInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_integrationInput, {
    nullable: true
  })
  create?: GuildCreateWithoutTwitter_integrationInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutTwitter_integrationInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutTwitter_integrationInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
