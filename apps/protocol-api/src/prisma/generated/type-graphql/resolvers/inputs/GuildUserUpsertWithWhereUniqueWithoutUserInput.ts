import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutUserInput } from "../inputs/GuildUserCreateWithoutUserInput";
import { GuildUserUpdateWithoutUserInput } from "../inputs/GuildUserUpdateWithoutUserInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class GuildUserUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutUserInput, {
    nullable: false
  })
  update!: GuildUserUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutUserInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutUserInput;
}
