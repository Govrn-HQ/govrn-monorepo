import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainTypeWhereInput } from "../inputs/ChainTypeWhereInput";

@TypeGraphQL.InputType("ChainTypeRelationFilter", {
  isAbstract: true
})
export class ChainTypeRelationFilter {
  @TypeGraphQL.Field(_type => ChainTypeWhereInput, {
    nullable: true
  })
  is?: ChainTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChainTypeWhereInput, {
    nullable: true
  })
  isNot?: ChainTypeWhereInput | undefined;
}
