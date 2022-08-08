import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateManyActivity_typeInputEnvelope } from "../inputs/ContributionCreateManyActivity_typeInputEnvelope";
import { ContributionCreateOrConnectWithoutActivity_typeInput } from "../inputs/ContributionCreateOrConnectWithoutActivity_typeInput";
import { ContributionCreateWithoutActivity_typeInput } from "../inputs/ContributionCreateWithoutActivity_typeInput";
import { ContributionScalarWhereInput } from "../inputs/ContributionScalarWhereInput";
import { ContributionUpdateManyWithWhereWithoutActivity_typeInput } from "../inputs/ContributionUpdateManyWithWhereWithoutActivity_typeInput";
import { ContributionUpdateWithWhereUniqueWithoutActivity_typeInput } from "../inputs/ContributionUpdateWithWhereUniqueWithoutActivity_typeInput";
import { ContributionUpsertWithWhereUniqueWithoutActivity_typeInput } from "../inputs/ContributionUpsertWithWhereUniqueWithoutActivity_typeInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateManyWithoutActivity_typeInput", {
  isAbstract: true
})
export class ContributionUpdateManyWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => [ContributionCreateWithoutActivity_typeInput], {
    nullable: true
  })
  create?: ContributionCreateWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionCreateOrConnectWithoutActivity_typeInput], {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionUpsertWithWhereUniqueWithoutActivity_typeInput], {
    nullable: true
  })
  upsert?: ContributionUpsertWithWhereUniqueWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateManyActivity_typeInputEnvelope, {
    nullable: true
  })
  createMany?: ContributionCreateManyActivity_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  set?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  delete?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionUpdateWithWhereUniqueWithoutActivity_typeInput], {
    nullable: true
  })
  update?: ContributionUpdateWithWhereUniqueWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionUpdateManyWithWhereWithoutActivity_typeInput], {
    nullable: true
  })
  updateMany?: ContributionUpdateManyWithWhereWithoutActivity_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContributionScalarWhereInput[] | undefined;
}
