import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("DiscordUserScalarWhereInput", {
  isAbstract: true
})
export class DiscordUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [DiscordUserScalarWhereInput], {
    nullable: true
  })
  AND?: DiscordUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarWhereInput], {
    nullable: true
  })
  OR?: DiscordUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarWhereInput], {
    nullable: true
  })
  NOT?: DiscordUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  display_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  discord_id?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_id?: IntFilter | undefined;
}
