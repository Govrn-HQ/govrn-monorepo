import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LinearTeamScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LinearTeamScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LinearTeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LinearTeamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearTeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LinearTeamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearTeamScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LinearTeamScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  linear_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  key?: StringWithAggregatesFilter | undefined;
}
