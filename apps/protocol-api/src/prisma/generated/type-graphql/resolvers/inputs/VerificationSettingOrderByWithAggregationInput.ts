import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingAvgOrderByAggregateInput } from "../inputs/VerificationSettingAvgOrderByAggregateInput";
import { VerificationSettingCountOrderByAggregateInput } from "../inputs/VerificationSettingCountOrderByAggregateInput";
import { VerificationSettingMaxOrderByAggregateInput } from "../inputs/VerificationSettingMaxOrderByAggregateInput";
import { VerificationSettingMinOrderByAggregateInput } from "../inputs/VerificationSettingMinOrderByAggregateInput";
import { VerificationSettingSumOrderByAggregateInput } from "../inputs/VerificationSettingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VerificationSettingOrderByWithAggregationInput", {
  isAbstract: true
})
export class VerificationSettingOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => VerificationSettingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VerificationSettingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VerificationSettingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VerificationSettingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VerificationSettingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VerificationSettingSumOrderByAggregateInput | undefined;
}
