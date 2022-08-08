import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildWhereInput } from "../inputs/GuildWhereInput";

@TypeGraphQL.InputType("GuildRelationFilter", {
  isAbstract: true
})
export class GuildRelationFilter {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  is?: GuildWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  isNot?: GuildWhereInput | undefined;
}
