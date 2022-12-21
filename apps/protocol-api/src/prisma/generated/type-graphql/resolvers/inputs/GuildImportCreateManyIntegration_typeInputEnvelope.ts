import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyIntegration_typeInput } from "../inputs/GuildImportCreateManyIntegration_typeInput";

@TypeGraphQL.InputType("GuildImportCreateManyIntegration_typeInputEnvelope", {
  isAbstract: true
})
export class GuildImportCreateManyIntegration_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildImportCreateManyIntegration_typeInput], {
    nullable: false
  })
  data!: GuildImportCreateManyIntegration_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
