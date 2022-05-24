import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscordUserCreateManyUserInput } from "../inputs/DiscordUserCreateManyUserInput";

@TypeGraphQL.InputType("DiscordUserCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class DiscordUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [DiscordUserCreateManyUserInput], {
    nullable: false
  })
  data!: DiscordUserCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
