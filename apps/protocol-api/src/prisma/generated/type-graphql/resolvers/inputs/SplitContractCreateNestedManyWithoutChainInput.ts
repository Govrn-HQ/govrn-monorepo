import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateManyChainInputEnvelope } from "../inputs/SplitContractCreateManyChainInputEnvelope";
import { SplitContractCreateOrConnectWithoutChainInput } from "../inputs/SplitContractCreateOrConnectWithoutChainInput";
import { SplitContractCreateWithoutChainInput } from "../inputs/SplitContractCreateWithoutChainInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractCreateNestedManyWithoutChainInput", {
  isAbstract: true
})
export class SplitContractCreateNestedManyWithoutChainInput {
  @TypeGraphQL.Field(_type => [SplitContractCreateWithoutChainInput], {
    nullable: true
  })
  create?: SplitContractCreateWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitContractCreateOrConnectWithoutChainInput], {
    nullable: true
  })
  connectOrCreate?: SplitContractCreateOrConnectWithoutChainInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitContractCreateManyChainInputEnvelope, {
    nullable: true
  })
  createMany?: SplitContractCreateManyChainInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SplitContractWhereUniqueInput], {
    nullable: true
  })
  connect?: SplitContractWhereUniqueInput[] | undefined;
}
