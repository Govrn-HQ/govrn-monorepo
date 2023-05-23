import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedOneWithoutTwitter_integrationInput } from "../inputs/GuildCreateNestedOneWithoutTwitter_integrationInput";

@TypeGraphQL.InputType("GuildTwitterIntegrationCreateInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutTwitter_integrationInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutTwitter_integrationInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hashtag!: string;
}
