import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyGuildInput } from "../inputs/GuildUserCreateManyGuildInput";

@TypeGraphQL.InputType("GuildUserCreateManyGuildInputEnvelope", {
  isAbstract: true
})
export class GuildUserCreateManyGuildInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildUserCreateManyGuildInput], {
    nullable: false
  })
  data!: GuildUserCreateManyGuildInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
