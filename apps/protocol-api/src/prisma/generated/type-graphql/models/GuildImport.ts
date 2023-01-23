import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Guild } from "../models/Guild";
import { GuildImportStatus } from "../models/GuildImportStatus";
import { GuildUser } from "../models/GuildUser";
import { IntegrationType } from "../models/IntegrationType";
import { GuildImportCount } from "../resolvers/outputs/GuildImportCount";

@TypeGraphQL.ObjectType("GuildImport", {
  isAbstract: true
})
export class GuildImport {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authentication_token!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guild_id!: number;

  guild?: Guild;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  integration_type_id!: number;

  integration_type?: IntegrationType;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  import_status_id!: number;

  import_status?: GuildImportStatus;

  users?: GuildUser[];

  @TypeGraphQL.Field(_type => GuildImportCount, {
    nullable: true
  })
  _count?: GuildImportCount | null;
}
