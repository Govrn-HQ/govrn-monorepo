import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscordUserCreateWithoutUserInput } from "../inputs/DiscordUserCreateWithoutUserInput";
import { DiscordUserUpdateWithoutUserInput } from "../inputs/DiscordUserUpdateWithoutUserInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType("DiscordUserUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class DiscordUserUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => DiscordUserWhereUniqueInput, {
    nullable: false
  })
  where!: DiscordUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => DiscordUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: DiscordUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => DiscordUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: DiscordUserCreateWithoutUserInput;
}
