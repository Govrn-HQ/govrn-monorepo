import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserUpdateWithoutGuild_importInput } from "../inputs/GuildUserUpdateWithoutGuild_importInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateWithWhereUniqueWithoutGuild_importInput", {
  isAbstract: true
})
export class GuildUserUpdateWithWhereUniqueWithoutGuild_importInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutGuild_importInput, {
    nullable: false
  })
  data!: GuildUserUpdateWithoutGuild_importInput;
}
