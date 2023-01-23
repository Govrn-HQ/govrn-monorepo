import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateOrConnectWithoutUsersInput } from "../inputs/GuildImportCreateOrConnectWithoutUsersInput";
import { GuildImportCreateWithoutUsersInput } from "../inputs/GuildImportCreateWithoutUsersInput";
import { GuildImportUpdateWithoutUsersInput } from "../inputs/GuildImportUpdateWithoutUsersInput";
import { GuildImportUpsertWithoutUsersInput } from "../inputs/GuildImportUpsertWithoutUsersInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportUpdateOneWithoutUsersNestedInput", {
  isAbstract: true
})
export class GuildImportUpdateOneWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => GuildImportCreateWithoutUsersInput, {
    nullable: true
  })
  create?: GuildImportCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: GuildImportCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: GuildImportUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildImportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: GuildImportUpdateWithoutUsersInput | undefined;
}
