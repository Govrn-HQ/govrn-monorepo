import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionListRelationFilter } from "../inputs/ContributionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ChainWhereInput", {
  isAbstract: true
})
export class ChainWhereInput {
  @TypeGraphQL.Field(_type => [ChainWhereInput], {
    nullable: true
  })
  AND?: ChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainWhereInput], {
    nullable: true
  })
  OR?: ChainWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChainWhereInput], {
    nullable: true
  })
  NOT?: ChainWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  chain_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionListRelationFilter, {
    nullable: true
  })
  contributions?: ContributionListRelationFilter | undefined;
}
