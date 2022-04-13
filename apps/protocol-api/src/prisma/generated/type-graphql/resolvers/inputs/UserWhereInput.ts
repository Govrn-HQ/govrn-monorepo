import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationListRelationFilter } from "../inputs/AttestationListRelationFilter";
import { ChainTypeRelationFilter } from "../inputs/ChainTypeRelationFilter";
import { ContributionListRelationFilter } from "../inputs/ContributionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PartnerListRelationFilter } from "../inputs/PartnerListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserActivityListRelationFilter } from "../inputs/UserActivityListRelationFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  dispaly_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  chain_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ChainTypeRelationFilter, {
    nullable: true
  })
  chain_type?: ChainTypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  full_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserActivityListRelationFilter, {
    nullable: true
  })
  activities?: UserActivityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AttestationListRelationFilter, {
    nullable: true
  })
  attestations?: AttestationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PartnerListRelationFilter, {
    nullable: true
  })
  contributionPartners?: PartnerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionListRelationFilter, {
    nullable: true
  })
  contributions?: ContributionListRelationFilter | undefined;
}
