import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionRelationFilter } from "../inputs/ContributionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumContributionPaymentTypeFilter } from "../inputs/EnumContributionPaymentTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SplitPaymentRelationFilter } from "../inputs/SplitPaymentRelationFilter";

@TypeGraphQL.InputType("ContributionPaymentWhereInput", {
  isAbstract: true
})
export class ContributionPaymentWhereInput {
  @TypeGraphQL.Field(_type => [ContributionPaymentWhereInput], {
    nullable: true
  })
  AND?: ContributionPaymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentWhereInput], {
    nullable: true
  })
  OR?: ContributionPaymentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentWhereInput], {
    nullable: true
  })
  NOT?: ContributionPaymentWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contribution_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionRelationFilter, {
    nullable: true
  })
  contribution?: ContributionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  split_payment_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentRelationFilter, {
    nullable: true
  })
  split_payment?: SplitPaymentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EnumContributionPaymentTypeFilter, {
    nullable: true
  })
  type?: EnumContributionPaymentTypeFilter | undefined;
}
