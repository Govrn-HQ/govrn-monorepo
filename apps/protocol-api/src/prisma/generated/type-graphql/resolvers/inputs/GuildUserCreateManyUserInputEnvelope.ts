import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyUserInput } from "../inputs/GuildUserCreateManyUserInput";

@TypeGraphQL.InputType("GuildUserCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class GuildUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildUserCreateManyUserInput], {
    nullable: false
  })
  data!: GuildUserCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
