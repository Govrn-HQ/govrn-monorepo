import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerCreateManyContributionInputEnvelope } from "../inputs/PartnerCreateManyContributionInputEnvelope";
import { PartnerCreateOrConnectWithoutContributionInput } from "../inputs/PartnerCreateOrConnectWithoutContributionInput";
import { PartnerCreateWithoutContributionInput } from "../inputs/PartnerCreateWithoutContributionInput";
import { PartnerScalarWhereInput } from "../inputs/PartnerScalarWhereInput";
import { PartnerUpdateManyWithWhereWithoutContributionInput } from "../inputs/PartnerUpdateManyWithWhereWithoutContributionInput";
import { PartnerUpdateWithWhereUniqueWithoutContributionInput } from "../inputs/PartnerUpdateWithWhereUniqueWithoutContributionInput";
import { PartnerUpsertWithWhereUniqueWithoutContributionInput } from "../inputs/PartnerUpsertWithWhereUniqueWithoutContributionInput";
import { PartnerWhereUniqueInput } from "../inputs/PartnerWhereUniqueInput";

@TypeGraphQL.InputType("PartnerUpdateManyWithoutContributionInput", {
  isAbstract: true
})
export class PartnerUpdateManyWithoutContributionInput {
  @TypeGraphQL.Field(_type => [PartnerCreateWithoutContributionInput], {
    nullable: true
  })
  create?: PartnerCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerCreateOrConnectWithoutContributionInput], {
    nullable: true
  })
  connectOrCreate?: PartnerCreateOrConnectWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerUpsertWithWhereUniqueWithoutContributionInput], {
    nullable: true
  })
  upsert?: PartnerUpsertWithWhereUniqueWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => PartnerCreateManyContributionInputEnvelope, {
    nullable: true
  })
  createMany?: PartnerCreateManyContributionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true
  })
  set?: PartnerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PartnerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true
  })
  delete?: PartnerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereUniqueInput], {
    nullable: true
  })
  connect?: PartnerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerUpdateWithWhereUniqueWithoutContributionInput], {
    nullable: true
  })
  update?: PartnerUpdateWithWhereUniqueWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerUpdateManyWithWhereWithoutContributionInput], {
    nullable: true
  })
  updateMany?: PartnerUpdateManyWithWhereWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PartnerScalarWhereInput[] | undefined;
}
