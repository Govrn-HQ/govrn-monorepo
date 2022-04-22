import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ActivityTypeScalarWhereInput", {
  isAbstract: true
})
export class ActivityTypeScalarWhereInput {
  @TypeGraphQL.Field(_type => [ActivityTypeScalarWhereInput], {
    nullable: true
  })
  AND?: ActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeScalarWhereInput], {
    nullable: true
  })
  OR?: ActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeScalarWhereInput], {
    nullable: true
  })
  NOT?: ActivityTypeScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  category_activity_id?: IntFilter | undefined;
}
