import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentCreateManySplit_contractInputEnvelope } from "../inputs/SplitPaymentCreateManySplit_contractInputEnvelope";
import { SplitPaymentCreateOrConnectWithoutSplit_contractInput } from "../inputs/SplitPaymentCreateOrConnectWithoutSplit_contractInput";
import { SplitPaymentCreateWithoutSplit_contractInput } from "../inputs/SplitPaymentCreateWithoutSplit_contractInput";
import { SplitPaymentScalarWhereInput } from "../inputs/SplitPaymentScalarWhereInput";
import { SplitPaymentUpdateManyWithWhereWithoutSplit_contractInput } from "../inputs/SplitPaymentUpdateManyWithWhereWithoutSplit_contractInput";
import { SplitPaymentUpdateWithWhereUniqueWithoutSplit_contractInput } from "../inputs/SplitPaymentUpdateWithWhereUniqueWithoutSplit_contractInput";
import { SplitPaymentUpsertWithWhereUniqueWithoutSplit_contractInput } from "../inputs/SplitPaymentUpsertWithWhereUniqueWithoutSplit_contractInput";
import { SplitPaymentWhereUniqueInput } from "../inputs/SplitPaymentWhereUniqueInput";

@TypeGraphQL.InputType("SplitPaymentUpdateManyWithoutSplit_contractNestedInput", {
  isAbstract: true
})
export class SplitPaymentUpdateManyWithoutSplit_contractNestedInput {
  @TypeGraphQL.Field(_type => [SplitPaymentCreateWithoutSplit_contractInput], {
    nullable: true
  })
  create?: SplitPaymentCreateWithoutSplit_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentCreateOrConnectWithoutSplit_contractInput], {
    nullable: true
  })
  connectOrCreate?: SplitPaymentCreateOrConnectWithoutSplit_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentUpsertWithWhereUniqueWithoutSplit_contractInput], {
    nullable: true
  })
  upsert?: SplitPaymentUpsertWithWhereUniqueWithoutSplit_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCreateManySplit_contractInputEnvelope, {
    nullable: true
  })
  createMany?: SplitPaymentCreateManySplit_contractInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  set?: SplitPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SplitPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  delete?: SplitPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentWhereUniqueInput], {
    nullable: true
  })
  connect?: SplitPaymentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentUpdateWithWhereUniqueWithoutSplit_contractInput], {
    nullable: true
  })
  update?: SplitPaymentUpdateWithWhereUniqueWithoutSplit_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentUpdateManyWithWhereWithoutSplit_contractInput], {
    nullable: true
  })
  updateMany?: SplitPaymentUpdateManyWithWhereWithoutSplit_contractInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SplitPaymentScalarWhereInput[] | undefined;
}
