import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CategoryActivityTypeListRelationFilter } from "../inputs/CategoryActivityTypeListRelationFilter";
import { ContributionListRelationFilter } from "../inputs/ContributionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserActivityListRelationFilter } from "../inputs/UserActivityListRelationFilter";

@TypeGraphQL.InputType("ActivityTypeWhereInput", {
  isAbstract: true
})
export class ActivityTypeWhereInput {
  @TypeGraphQL.Field(_type => [ActivityTypeWhereInput], {
    nullable: true
  })
  AND?: ActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeWhereInput], {
    nullable: true
  })
  OR?: ActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeWhereInput], {
    nullable: true
  })
  NOT?: ActivityTypeWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => UserActivityListRelationFilter, {
    nullable: true
  })
  users?: UserActivityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionListRelationFilter, {
    nullable: true
  })
  contributions?: ContributionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeListRelationFilter, {
    nullable: true
  })
  categoryActivity?: CategoryActivityTypeListRelationFilter | undefined;
}
