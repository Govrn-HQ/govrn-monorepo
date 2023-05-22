import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutTwitter_integrationInput } from "../inputs/GuildCreateOrConnectWithoutTwitter_integrationInput";
import { GuildCreateWithoutTwitter_integrationInput } from "../inputs/GuildCreateWithoutTwitter_integrationInput";
import { GuildUpdateWithoutTwitter_integrationInput } from "../inputs/GuildUpdateWithoutTwitter_integrationInput";
import { GuildUpsertWithoutTwitter_integrationInput } from "../inputs/GuildUpsertWithoutTwitter_integrationInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateOneRequiredWithoutTwitter_integrationNestedInput", {
  isAbstract: true
})
export class GuildUpdateOneRequiredWithoutTwitter_integrationNestedInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutTwitter_integrationInput, {
    nullable: true
  })
  create?: GuildCreateWithoutTwitter_integrationInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutTwitter_integrationInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutTwitter_integrationInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutTwitter_integrationInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutTwitter_integrationInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutTwitter_integrationInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutTwitter_integrationInput | undefined;
}
