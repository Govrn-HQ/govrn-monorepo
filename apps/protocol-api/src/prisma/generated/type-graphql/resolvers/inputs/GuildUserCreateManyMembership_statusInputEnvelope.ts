import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyMembership_statusInput } from "../inputs/GuildUserCreateManyMembership_statusInput";

@TypeGraphQL.InputType("GuildUserCreateManyMembership_statusInputEnvelope", {
  isAbstract: true
})
export class GuildUserCreateManyMembership_statusInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildUserCreateManyMembership_statusInput], {
    nullable: false
  })
  data!: GuildUserCreateManyMembership_statusInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
