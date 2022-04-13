import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationOrderByRelationAggregateInput } from "../inputs/AttestationOrderByRelationAggregateInput";
import { ChainTypeOrderByWithRelationInput } from "../inputs/ChainTypeOrderByWithRelationInput";
import { ContributionOrderByRelationAggregateInput } from "../inputs/ContributionOrderByRelationAggregateInput";
import { PartnerOrderByRelationAggregateInput } from "../inputs/PartnerOrderByRelationAggregateInput";
import { UserActivityOrderByRelationAggregateInput } from "../inputs/UserActivityOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  dispaly_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  chain_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChainTypeOrderByWithRelationInput, {
    nullable: true
  })
  chain_type?: ChainTypeOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  full_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserActivityOrderByRelationAggregateInput, {
    nullable: true
  })
  activities?: UserActivityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationOrderByRelationAggregateInput, {
    nullable: true
  })
  attestations?: AttestationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerOrderByRelationAggregateInput, {
    nullable: true
  })
  contributionPartners?: PartnerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  contributions?: ContributionOrderByRelationAggregateInput | undefined;
}
