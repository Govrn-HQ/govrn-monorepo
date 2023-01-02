import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutGuild_importsInput } from "../inputs/GuildCreateWithoutGuild_importsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateOrConnectWithoutGuild_importsInput", {
  isAbstract: true
})
export class GuildCreateOrConnectWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutGuild_importsInput, {
    nullable: false
  })
  create!: GuildCreateWithoutGuild_importsInput;
}
