import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationTypeWhereInput } from "../inputs/IntegrationTypeWhereInput";

@TypeGraphQL.InputType("IntegrationTypeRelationFilter", {
  isAbstract: true
})
export class IntegrationTypeRelationFilter {
  @TypeGraphQL.Field(_type => IntegrationTypeWhereInput, {
    nullable: true
  })
  is?: IntegrationTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeWhereInput, {
    nullable: true
  })
  isNot?: IntegrationTypeWhereInput | undefined;
}
