import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("GuildTwitterIntegrationWhereUniqueInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  guild_id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hashtag?: string | undefined;
}
