import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractScalarWhereInput } from "../inputs/SplitContractScalarWhereInput";
import { SplitContractUpdateManyMutationInput } from "../inputs/SplitContractUpdateManyMutationInput";

@TypeGraphQL.InputType("SplitContractUpdateManyWithWhereWithoutChainInput", {
  isAbstract: true
})
export class SplitContractUpdateManyWithWhereWithoutChainInput {
  @TypeGraphQL.Field(_type => SplitContractScalarWhereInput, {
    nullable: false
  })
  where!: SplitContractScalarWhereInput;

  @TypeGraphQL.Field(_type => SplitContractUpdateManyMutationInput, {
    nullable: false
  })
  data!: SplitContractUpdateManyMutationInput;
}
