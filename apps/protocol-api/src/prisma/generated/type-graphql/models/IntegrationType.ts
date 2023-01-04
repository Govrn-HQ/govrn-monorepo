import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { GuildImport } from "../models/GuildImport";
import { IntegrationTypeCount } from "../resolvers/outputs/IntegrationTypeCount";

@TypeGraphQL.ObjectType("IntegrationType", {
  isAbstract: true
})
export class IntegrationType {
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

  @TypeGraphQL.Field(_type => IntegrationTypeCount, {
    nullable: true
  })
  _count?: IntegrationTypeCount | null;
}
