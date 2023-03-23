import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildWhereInput } from "../inputs/GuildWhereInput";

@TypeGraphQL.InputType("GuildListRelationFilter", {
  isAbstract: true
})
export class GuildListRelationFilter {
  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  every?: GuildWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  some?: GuildWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildWhereInput, {
    nullable: true
  })
  none?: GuildWhereInput | undefined;
}
