import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildTwitterIntegrationWhereInput } from "../inputs/GuildTwitterIntegrationWhereInput";

@TypeGraphQL.InputType("GuildTwitterIntegrationRelationFilter", {
  isAbstract: true
})
export class GuildTwitterIntegrationRelationFilter {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereInput, {
    nullable: true
  })
  is?: GuildTwitterIntegrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereInput, {
    nullable: true
  })
  isNot?: GuildTwitterIntegrationWhereInput | undefined;
}
