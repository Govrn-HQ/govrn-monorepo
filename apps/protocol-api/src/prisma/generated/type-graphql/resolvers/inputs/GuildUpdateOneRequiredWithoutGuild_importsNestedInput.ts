import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateOrConnectWithoutGuild_importsInput } from "../inputs/GuildCreateOrConnectWithoutGuild_importsInput";
import { GuildCreateWithoutGuild_importsInput } from "../inputs/GuildCreateWithoutGuild_importsInput";
import { GuildUpdateWithoutGuild_importsInput } from "../inputs/GuildUpdateWithoutGuild_importsInput";
import { GuildUpsertWithoutGuild_importsInput } from "../inputs/GuildUpsertWithoutGuild_importsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateOneRequiredWithoutGuild_importsNestedInput", {
  isAbstract: true
})
export class GuildUpdateOneRequiredWithoutGuild_importsNestedInput {
  @TypeGraphQL.Field(_type => GuildCreateWithoutGuild_importsInput, {
    nullable: true
  })
  create?: GuildCreateWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildCreateOrConnectWithoutGuild_importsInput, {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpsertWithoutGuild_importsInput, {
    nullable: true
  })
  upsert?: GuildUpsertWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildUpdateWithoutGuild_importsInput, {
    nullable: true
  })
  update?: GuildUpdateWithoutGuild_importsInput | undefined;
}
