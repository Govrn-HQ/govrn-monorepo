import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractWhereInput } from "../inputs/SplitContractWhereInput";

@TypeGraphQL.InputType("SplitContractRelationFilter", {
  isAbstract: true
})
export class SplitContractRelationFilter {
  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  is?: SplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  isNot?: SplitContractWhereInput | undefined;
}
