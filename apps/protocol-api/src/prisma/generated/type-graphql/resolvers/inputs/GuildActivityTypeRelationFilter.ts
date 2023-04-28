import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeWhereInput } from "../inputs/GuildActivityTypeWhereInput";

@TypeGraphQL.InputType("GuildActivityTypeRelationFilter", {
  isAbstract: true
})
export class GuildActivityTypeRelationFilter {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true
  })
  is?: GuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeWhereInput, {
    nullable: true
  })
  isNot?: GuildActivityTypeWhereInput | undefined;
}
