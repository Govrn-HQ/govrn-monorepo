import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractScalarWhereInput } from "../inputs/SplitContractScalarWhereInput";
import { SplitContractUpdateManyMutationInput } from "../inputs/SplitContractUpdateManyMutationInput";

@TypeGraphQL.InputType("SplitContractUpdateManyWithWhereWithoutUser_split_contractInput", {
  isAbstract: true
})
export class SplitContractUpdateManyWithWhereWithoutUser_split_contractInput {
  @TypeGraphQL.Field(_type => SplitContractScalarWhereInput, {
    nullable: false
  })
  where!: SplitContractScalarWhereInput;

  @TypeGraphQL.Field(_type => SplitContractUpdateManyMutationInput, {
    nullable: false
  })
  data!: SplitContractUpdateManyMutationInput;
}
