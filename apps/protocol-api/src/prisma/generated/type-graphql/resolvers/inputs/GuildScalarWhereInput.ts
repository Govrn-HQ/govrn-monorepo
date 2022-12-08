import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumGuildStatusFilter } from "../inputs/EnumGuildStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("GuildScalarWhereInput", {
  isAbstract: true
})
export class GuildScalarWhereInput {
  @TypeGraphQL.Field(_type => [GuildScalarWhereInput], {
    nullable: true
  })
  AND?: GuildScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildScalarWhereInput], {
    nullable: true
  })
  OR?: GuildScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildScalarWhereInput], {
    nullable: true
  })
  NOT?: GuildScalarWhereInput[] | undefined;

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
  discord_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  congrats_channel?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  logo?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  contribution_reporting_channel?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGuildStatusFilter, {
    nullable: true
  })
  status?: EnumGuildStatusFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  verification_status_id?: IntFilter | undefined;
}
