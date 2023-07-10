import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractCreateOrConnectWithoutSplit_paymentsInput } from "../inputs/SplitContractCreateOrConnectWithoutSplit_paymentsInput";
import { SplitContractCreateWithoutSplit_paymentsInput } from "../inputs/SplitContractCreateWithoutSplit_paymentsInput";
import { SplitContractUpdateWithoutSplit_paymentsInput } from "../inputs/SplitContractUpdateWithoutSplit_paymentsInput";
import { SplitContractUpsertWithoutSplit_paymentsInput } from "../inputs/SplitContractUpsertWithoutSplit_paymentsInput";
import { SplitContractWhereUniqueInput } from "../inputs/SplitContractWhereUniqueInput";

@TypeGraphQL.InputType("SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput", {
  isAbstract: true
})
export class SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput {
  @TypeGraphQL.Field(_type => SplitContractCreateWithoutSplit_paymentsInput, {
    nullable: true
  })
  create?: SplitContractCreateWithoutSplit_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractCreateOrConnectWithoutSplit_paymentsInput, {
    nullable: true
  })
  connectOrCreate?: SplitContractCreateOrConnectWithoutSplit_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractUpsertWithoutSplit_paymentsInput, {
    nullable: true
  })
  upsert?: SplitContractUpsertWithoutSplit_paymentsInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractWhereUniqueInput, {
    nullable: true
  })
  connect?: SplitContractWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractUpdateWithoutSplit_paymentsInput, {
    nullable: true
  })
  update?: SplitContractUpdateWithoutSplit_paymentsInput | undefined;
}
