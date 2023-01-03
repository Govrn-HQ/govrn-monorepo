import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyGuildInput } from "../inputs/GuildImportCreateManyGuildInput";

@TypeGraphQL.InputType("GuildImportCreateManyGuildInputEnvelope", {
  isAbstract: true
})
export class GuildImportCreateManyGuildInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildImportCreateManyGuildInput], {
    nullable: false
  })
  data!: GuildImportCreateManyGuildInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
