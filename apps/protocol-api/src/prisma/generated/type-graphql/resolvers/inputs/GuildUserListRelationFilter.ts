import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildUserWhereInput } from "../inputs/GuildUserWhereInput";

@TypeGraphQL.InputType("GuildUserListRelationFilter", {
  isAbstract: true
})
export class GuildUserListRelationFilter {
  @TypeGraphQL.Field(_type => GuildUserWhereInput, {
    nullable: true
  })
  every?: GuildUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserWhereInput, {
    nullable: true
  })
  some?: GuildUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserWhereInput, {
    nullable: true
  })
  none?: GuildUserWhereInput | undefined;
}
