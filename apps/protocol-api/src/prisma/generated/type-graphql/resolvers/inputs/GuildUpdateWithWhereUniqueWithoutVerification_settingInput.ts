import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUpdateWithoutVerification_settingInput } from "../inputs/GuildUpdateWithoutVerification_settingInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateWithWhereUniqueWithoutVerification_settingInput", {
  isAbstract: true
})
export class GuildUpdateWithWhereUniqueWithoutVerification_settingInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutVerification_settingInput, {
    nullable: false
  })
  data!: GuildUpdateWithoutVerification_settingInput;
}
