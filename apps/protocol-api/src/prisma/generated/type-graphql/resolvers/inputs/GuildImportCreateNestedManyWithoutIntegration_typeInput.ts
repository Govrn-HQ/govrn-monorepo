import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyIntegration_typeInputEnvelope } from "../inputs/GuildImportCreateManyIntegration_typeInputEnvelope";
import { GuildImportCreateOrConnectWithoutIntegration_typeInput } from "../inputs/GuildImportCreateOrConnectWithoutIntegration_typeInput";
import { GuildImportCreateWithoutIntegration_typeInput } from "../inputs/GuildImportCreateWithoutIntegration_typeInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportCreateNestedManyWithoutIntegration_typeInput", {
  isAbstract: true
})
export class GuildImportCreateNestedManyWithoutIntegration_typeInput {
  @TypeGraphQL.Field(_type => [GuildImportCreateWithoutIntegration_typeInput], {
    nullable: true
  })
  create?: GuildImportCreateWithoutIntegration_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportCreateOrConnectWithoutIntegration_typeInput], {
    nullable: true
  })
  connectOrCreate?: GuildImportCreateOrConnectWithoutIntegration_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateManyIntegration_typeInputEnvelope, {
    nullable: true
  })
  createMany?: GuildImportCreateManyIntegration_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildImportWhereUniqueInput[] | undefined;
}
