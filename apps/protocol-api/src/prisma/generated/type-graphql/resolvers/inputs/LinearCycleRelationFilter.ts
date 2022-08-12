import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearCycleWhereInput } from "../inputs/LinearCycleWhereInput";

@TypeGraphQL.InputType("LinearCycleRelationFilter", {
  isAbstract: true
})
export class LinearCycleRelationFilter {
  @TypeGraphQL.Field(_type => LinearCycleWhereInput, {
    nullable: true
  })
  is?: LinearCycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleWhereInput, {
    nullable: true
  })
  isNot?: LinearCycleWhereInput | undefined;
}
