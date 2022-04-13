import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionStatusWhereInput } from "../inputs/ContributionStatusWhereInput";

@TypeGraphQL.InputType("ContributionStatusRelationFilter", {
  isAbstract: true
})
export class ContributionStatusRelationFilter {
  @TypeGraphQL.Field(_type => ContributionStatusWhereInput, {
    nullable: true
  })
  is?: ContributionStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusWhereInput, {
    nullable: true
  })
  isNot?: ContributionStatusWhereInput | undefined;
}
