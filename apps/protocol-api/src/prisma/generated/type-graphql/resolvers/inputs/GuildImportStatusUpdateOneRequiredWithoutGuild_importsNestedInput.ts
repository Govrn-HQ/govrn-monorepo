import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusCreateOrConnectWithoutGuild_importsInput } from "../inputs/GuildImportStatusCreateOrConnectWithoutGuild_importsInput";
import { GuildImportStatusCreateWithoutGuild_importsInput } from "../inputs/GuildImportStatusCreateWithoutGuild_importsInput";
import { GuildImportStatusUpdateWithoutGuild_importsInput } from "../inputs/GuildImportStatusUpdateWithoutGuild_importsInput";
import { GuildImportStatusUpsertWithoutGuild_importsInput } from "../inputs/GuildImportStatusUpsertWithoutGuild_importsInput";
import { GuildImportStatusWhereUniqueInput } from "../inputs/GuildImportStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput", {
  isAbstract: true
})
export class GuildImportStatusUpdateOneRequiredWithoutGuild_importsNestedInput {
  @TypeGraphQL.Field(_type => GuildImportStatusCreateWithoutGuild_importsInput, {
    nullable: true
  })
  create?: GuildImportStatusCreateWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusCreateOrConnectWithoutGuild_importsInput, {
    nullable: true
  })
  connectOrCreate?: GuildImportStatusCreateOrConnectWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusUpsertWithoutGuild_importsInput, {
    nullable: true
  })
  upsert?: GuildImportStatusUpsertWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildImportStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusUpdateWithoutGuild_importsInput, {
    nullable: true
  })
  update?: GuildImportStatusUpdateWithoutGuild_importsInput | undefined;
}
