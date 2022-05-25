import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildRelationFilter } from "../inputs/GuildRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TwitterAccountWhereInput", {
  isAbstract: true
})
export class TwitterAccountWhereInput {
  @TypeGraphQL.Field(_type => [TwitterAccountWhereInput], {
    nullable: true
  })
  AND?: TwitterAccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountWhereInput], {
    nullable: true
  })
  OR?: TwitterAccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountWhereInput], {
    nullable: true
  })
  NOT?: TwitterAccountWhereInput[] | undefined;

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
  account_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  guild_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true
  })
  guild?: GuildRelationFilter | undefined;
}
