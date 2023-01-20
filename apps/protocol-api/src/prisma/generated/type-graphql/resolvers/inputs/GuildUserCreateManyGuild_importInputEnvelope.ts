import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserCreateManyGuild_importInput } from "../inputs/GuildUserCreateManyGuild_importInput";

@TypeGraphQL.InputType("GuildUserCreateManyGuild_importInputEnvelope", {
  isAbstract: true
})
export class GuildUserCreateManyGuild_importInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildUserCreateManyGuild_importInput], {
    nullable: false
  })
  data!: GuildUserCreateManyGuild_importInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
