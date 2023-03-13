import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("VerificationSettingsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class VerificationSettingsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VerificationSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VerificationSettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VerificationSettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VerificationSettingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  guild_id?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  num_of_attestations?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
