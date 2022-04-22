import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("UserActivityScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserActivityScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserActivityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserActivityScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserActivityScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  user_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  activity_type_id?: IntWithAggregatesFilter | undefined;
}
