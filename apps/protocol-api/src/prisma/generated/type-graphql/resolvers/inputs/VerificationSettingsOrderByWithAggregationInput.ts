import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsAvgOrderByAggregateInput } from "../inputs/VerificationSettingsAvgOrderByAggregateInput";
import { VerificationSettingsCountOrderByAggregateInput } from "../inputs/VerificationSettingsCountOrderByAggregateInput";
import { VerificationSettingsMaxOrderByAggregateInput } from "../inputs/VerificationSettingsMaxOrderByAggregateInput";
import { VerificationSettingsMinOrderByAggregateInput } from "../inputs/VerificationSettingsMinOrderByAggregateInput";
import { VerificationSettingsSumOrderByAggregateInput } from "../inputs/VerificationSettingsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VerificationSettingsOrderByWithAggregationInput", {
  isAbstract: true
})
export class VerificationSettingsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guild_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  num_of_attestations?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VerificationSettingsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VerificationSettingsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VerificationSettingsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VerificationSettingsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VerificationSettingsSumOrderByAggregateInput | undefined;
}
