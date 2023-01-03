import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyGuildInputEnvelope } from "../inputs/GuildImportCreateManyGuildInputEnvelope";
import { GuildImportCreateOrConnectWithoutGuildInput } from "../inputs/GuildImportCreateOrConnectWithoutGuildInput";
import { GuildImportCreateWithoutGuildInput } from "../inputs/GuildImportCreateWithoutGuildInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportCreateNestedManyWithoutGuildInput", {
  isAbstract: true
})
export class GuildImportCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [GuildImportCreateWithoutGuildInput], {
    nullable: true
  })
  create?: GuildImportCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: GuildImportCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: GuildImportCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildImportWhereUniqueInput[] | undefined;
}
