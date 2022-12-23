import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuildImportScalarWhereInput", {
  isAbstract: true
})
export class GuildImportScalarWhereInput {
  @TypeGraphQL.Field(_type => [GuildImportScalarWhereInput], {
    nullable: true
  })
  AND?: GuildImportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarWhereInput], {
    nullable: true
  })
  OR?: GuildImportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarWhereInput], {
    nullable: true
  })
  NOT?: GuildImportScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authentication_token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  integration_type_id?: IntFilter | undefined;
}
