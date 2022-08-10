import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionWhereInput } from "../inputs/ContributionWhereInput";

@TypeGraphQL.InputType("ContributionListRelationFilter", {
  isAbstract: true
})
export class ContributionListRelationFilter {
  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  every?: ContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  some?: ContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true
  })
  none?: ContributionWhereInput | undefined;
}
