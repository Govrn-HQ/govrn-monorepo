import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutGuildInput } from "../inputs/GuildUserCreateWithoutGuildInput";
import { GuildUserUpdateWithoutGuildInput } from "../inputs/GuildUserUpdateWithoutGuildInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpsertWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class GuildUserUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: GuildUserUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutGuildInput;
}
