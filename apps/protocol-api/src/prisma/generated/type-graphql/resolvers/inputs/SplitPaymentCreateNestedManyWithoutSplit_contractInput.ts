import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateManySplit_contractInputEnvelope } from "../inputs/SplitPaymentCreateManySplit_contractInputEnvelope";
import { SplitPaymentCreateOrConnectWithoutSplit_contractInput } from "../inputs/SplitPaymentCreateOrConnectWithoutSplit_contractInput";
import { SplitPaymentCreateWithoutSplit_contractInput } from "../inputs/SplitPaymentCreateWithoutSplit_contractInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentCreateNestedManyWithoutSplit_contractInput", {
  isAbstract: true
})
export class SplitPaymentCreateNestedManyWithoutSplit_contractInput {
  @TypeGraphQL.Field(_type => [SplitPaymentCreateWithoutSplit_contractInput], {
    nullable: true
  })
  create?: SplitPaymentCreateWithoutSplit_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentCreateOrConnectWithoutSplit_contractInput], {
    nullable: true
  })
  connectOrCreate?: SplitPaymentCreateOrConnectWithoutSplit_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCreateManySplit_contractInputEnvelope, {
    nullable: true
  })
  createMany?: SplitPaymentCreateManySplit_contractInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: SplitPaymentWhereUniqueInput[] | undefined;
}
