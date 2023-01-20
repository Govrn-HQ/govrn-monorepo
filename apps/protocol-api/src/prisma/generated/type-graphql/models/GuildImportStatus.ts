import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GuildImport } from "../models/GuildImport";
import { GuildImportStatusCount } from "../resolvers/outputs/GuildImportStatusCount";

@TypeGraphQL.ObjectType("GuildImportStatus", {
  isAbstract: true
})
export class GuildImportStatus {
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
  name!: string;

  guild_imports?: GuildImport[];

  @TypeGraphQL.Field(_type => GuildImportStatusCount, {
    nullable: true
  })
  _count?: GuildImportStatusCount | null;
}
