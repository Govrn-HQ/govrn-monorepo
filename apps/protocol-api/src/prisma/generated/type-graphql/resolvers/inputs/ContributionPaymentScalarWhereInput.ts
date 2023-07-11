import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumContributionPaymentTypeFilter } from "../inputs/EnumContributionPaymentTypeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ContributionPaymentScalarWhereInput", {
  isAbstract: true
})
export class ContributionPaymentScalarWhereInput {
  @TypeGraphQL.Field(_type => [ContributionPaymentScalarWhereInput], {
    nullable: true
  })
  AND?: ContributionPaymentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentScalarWhereInput], {
    nullable: true
  })
  OR?: ContributionPaymentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionPaymentScalarWhereInput], {
    nullable: true
  })
  NOT?: ContributionPaymentScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  split_payment_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumContributionPaymentTypeFilter, {
    nullable: true
  })
  type?: EnumContributionPaymentTypeFilter | undefined;
}
