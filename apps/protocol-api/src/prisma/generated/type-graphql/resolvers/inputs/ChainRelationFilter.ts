import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainWhereInput } from "../inputs/ChainWhereInput";

@TypeGraphQL.InputType("ChainRelationFilter", {
  isAbstract: true
})
export class ChainRelationFilter {
  @TypeGraphQL.Field(_type => ChainWhereInput, {
    nullable: true
  })
  is?: ChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChainWhereInput, {
    nullable: true
  })
  isNot?: ChainWhereInput | undefined;
}
