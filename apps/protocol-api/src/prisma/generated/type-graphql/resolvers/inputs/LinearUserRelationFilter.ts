import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserWhereInput } from "../inputs/LinearUserWhereInput";

@TypeGraphQL.InputType("LinearUserRelationFilter", {
  isAbstract: true
})
export class LinearUserRelationFilter {
  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true
  })
  is?: LinearUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserWhereInput, {
    nullable: true
  })
  isNot?: LinearUserWhereInput | undefined;
}
