import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutGuild_importsInput } from "../inputs/GuildCreateOrConnectWithoutGuild_importsInput";
import { GuildCreateWithoutGuild_importsInput } from "../inputs/GuildCreateWithoutGuild_importsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateNestedOneWithoutGuild_importsInput", {
  isAbstract: true
})
export class GuildCreateNestedOneWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutGuild_importsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutGuild_importsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;
}
