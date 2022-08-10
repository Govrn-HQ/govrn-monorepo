import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserUpdateWithoutGuildInput } from "../inputs/GuildUserUpdateWithoutGuildInput";
import { GuildUserWhereUniqueInput } from "../inputs/GuildUserWhereUniqueInput";

@TypeGraphQL.InputType("GuildUserUpdateWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class GuildUserUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildUserWhereUniqueInput, {
    nullable: false
  })
  where!: GuildUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUserUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: GuildUserUpdateWithoutGuildInput;
}
