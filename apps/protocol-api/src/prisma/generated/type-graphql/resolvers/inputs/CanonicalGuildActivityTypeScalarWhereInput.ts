import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeScalarWhereInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeScalarWhereInput {
  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarWhereInput], {
    nullable: true
  })
  AND?: CanonicalGuildActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarWhereInput], {
    nullable: true
  })
  OR?: CanonicalGuildActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CanonicalGuildActivityTypeScalarWhereInput], {
    nullable: true
  })
  NOT?: CanonicalGuildActivityTypeScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_activity_type_id?: IntFilter | undefined;
}
