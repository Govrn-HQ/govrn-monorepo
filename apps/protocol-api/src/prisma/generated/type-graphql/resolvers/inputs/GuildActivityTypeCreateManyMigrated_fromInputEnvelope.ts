import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateManyMigrated_fromInput } from "../inputs/GuildActivityTypeCreateManyMigrated_fromInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateManyMigrated_fromInputEnvelope", {
  isAbstract: true
})
export class GuildActivityTypeCreateManyMigrated_fromInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateManyMigrated_fromInput], {
    nullable: false
  })
  data!: GuildActivityTypeCreateManyMigrated_fromInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
