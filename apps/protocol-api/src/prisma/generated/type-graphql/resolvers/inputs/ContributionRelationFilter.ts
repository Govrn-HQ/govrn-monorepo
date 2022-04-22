import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionWhereInput } from "../inputs/ContributionWhereInput";

@TypeGraphQL.InputType("ContributionRelationFilter", {
  isAbstract: true
})
export class ContributionRelationFilter {
  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  is?: ContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  isNot?: ContributionWhereInput | undefined;
}
