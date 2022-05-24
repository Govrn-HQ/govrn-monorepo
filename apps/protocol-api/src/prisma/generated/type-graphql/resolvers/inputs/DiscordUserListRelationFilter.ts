import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscordUserWhereInput } from "../inputs/DiscordUserWhereInput";

@TypeGraphQL.InputType("DiscordUserListRelationFilter", {
  isAbstract: true
})
export class DiscordUserListRelationFilter {
  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  every?: DiscordUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  some?: DiscordUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserWhereInput, {
    nullable: true
  })
  none?: DiscordUserWhereInput | undefined;
}
