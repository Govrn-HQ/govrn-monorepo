import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("VerificationSettingScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class VerificationSettingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VerificationSettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VerificationSettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VerificationSettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VerificationSettingScalarWhereWithAggregatesInput[] | undefined;

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
