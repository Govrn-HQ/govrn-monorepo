import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildListRelationFilter } from "../inputs/GuildListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuildVerificationStatusWhereInput", {
  isAbstract: true
})
export class GuildVerificationStatusWhereInput {
  @TypeGraphQL.Field(_type => [GuildVerificationStatusWhereInput], {
    nullable: true
  })
  AND?: GuildVerificationStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildVerificationStatusWhereInput], {
    nullable: true
  })
  OR?: GuildVerificationStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildVerificationStatusWhereInput], {
    nullable: true
  })
  NOT?: GuildVerificationStatusWhereInput[] | undefined;

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
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => GuildListRelationFilter, {
    nullable: true
  })
  Guild?: GuildListRelationFilter | undefined;
}
