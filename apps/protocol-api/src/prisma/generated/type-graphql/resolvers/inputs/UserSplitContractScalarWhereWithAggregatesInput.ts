import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("UserSplitContractScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserSplitContractScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserSplitContractScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserSplitContractScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserSplitContractScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserSplitContractScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserSplitContractScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  enabled?: BoolWithAggregatesFilter | undefined;
}
