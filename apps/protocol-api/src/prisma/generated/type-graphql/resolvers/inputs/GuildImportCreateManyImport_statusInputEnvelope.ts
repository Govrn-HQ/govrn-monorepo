import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyImport_statusInput } from "../inputs/GuildImportCreateManyImport_statusInput";

@TypeGraphQL.InputType("GuildImportCreateManyImport_statusInputEnvelope", {
  isAbstract: true
})
export class GuildImportCreateManyImport_statusInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildImportCreateManyImport_statusInput], {
    nullable: false
  })
  data!: GuildImportCreateManyImport_statusInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
