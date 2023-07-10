import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractWhereInput } from "../inputs/SplitContractWhereInput";

@TypeGraphQL.InputType("SplitContractListRelationFilter", {
  isAbstract: true
})
export class SplitContractListRelationFilter {
  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  every?: SplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  some?: SplitContractWhereInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractWhereInput, {
    nullable: true
  })
  none?: SplitContractWhereInput | undefined;
}
