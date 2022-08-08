import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscordUserCreateManyUserInputEnvelope } from "../inputs/DiscordUserCreateManyUserInputEnvelope";
import { DiscordUserCreateOrConnectWithoutUserInput } from "../inputs/DiscordUserCreateOrConnectWithoutUserInput";
import { DiscordUserCreateWithoutUserInput } from "../inputs/DiscordUserCreateWithoutUserInput";
import { DiscordUserWhereUniqueInput } from "../inputs/DiscordUserWhereUniqueInput";

@TypeGraphQL.InputType("DiscordUserCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class DiscordUserCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [DiscordUserCreateWithoutUserInput], {
    nullable: true
  })
  create?: DiscordUserCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: DiscordUserCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: DiscordUserCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserWhereUniqueInput], {
    nullable: true
  })
  connect?: DiscordUserWhereUniqueInput[] | undefined;
}
