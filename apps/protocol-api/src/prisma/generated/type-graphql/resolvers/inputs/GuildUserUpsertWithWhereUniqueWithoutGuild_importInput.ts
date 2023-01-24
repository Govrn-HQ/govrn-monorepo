import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateWithoutGuild_importInput } from "../inputs/GuildUserCreateWithoutGuild_importInput";
import { GuildUserUpdateWithoutGuild_importInput } from "../inputs/GuildUserUpdateWithoutGuild_importInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpsertWithWhereUniqueWithoutGuild_importInput", {
  isAbstract: true
})
export class GuildUserUpsertWithWhereUniqueWithoutGuild_importInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutGuild_importInput, {
    nullable: false
  })
  update!: GuildUserUpdateWithoutGuild_importInput;

  @TypeGraphQL.Field(_type => GuildUserCreateWithoutGuild_importInput, {
    nullable: false
  })
  create!: GuildUserCreateWithoutGuild_importInput;
}
