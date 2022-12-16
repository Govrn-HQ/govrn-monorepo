import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("GuildUserScalarWhereInput", {
  isAbstract: true
})
export class GuildUserScalarWhereInput {
  @TypeGraphQL.Field(_type => [GuildUserScalarWhereInput], {
    nullable: true
  })
  AND?: GuildUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereInput], {
    nullable: true
  })
  OR?: GuildUserScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUserScalarWhereInput], {
    nullable: true
  })
  NOT?: GuildUserScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  membership_status_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  favorite?: BoolFilter | undefined;
}
