import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateOrConnectWithoutSplit_paymentsInput } from "../inputs/SplitContractCreateOrConnectWithoutSplit_paymentsInput";
import { SplitContractCreateWithoutSplit_paymentsInput } from "../inputs/SplitContractCreateWithoutSplit_paymentsInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractCreateNestedOneWithoutSplit_paymentsInput", {
  isAbstract: true
})
export class SplitContractCreateNestedOneWithoutSplit_paymentsInput {
  @TypeGraphQL.Field(_type => SplitContractCreateWithoutSplit_paymentsInput, {
    nullable: true
  })
  create?: SplitContractCreateWithoutSplit_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractCreateOrConnectWithoutSplit_paymentsInput, {
    nullable: true
  })
  connectOrCreate?: SplitContractCreateOrConnectWithoutSplit_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: true
  })
  connect?: SplitContractWhereUniqueInput | undefined;
}
