import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyContributionInputEnvelope } from "../inputs/AttestationCreateManyContributionInputEnvelope";
import { AttestationCreateOrConnectWithoutContributionInput } from "../inputs/AttestationCreateOrConnectWithoutContributionInput";
import { AttestationCreateWithoutContributionInput } from "../inputs/AttestationCreateWithoutContributionInput";
import { AttestationScalarWhereInput } from "../inputs/AttestationScalarWhereInput";
import { AttestationUpdateManyWithWhereWithoutContributionInput } from "../inputs/AttestationUpdateManyWithWhereWithoutContributionInput";
import { AttestationUpdateWithWhereUniqueWithoutContributionInput } from "../inputs/AttestationUpdateWithWhereUniqueWithoutContributionInput";
import { AttestationUpsertWithWhereUniqueWithoutContributionInput } from "../inputs/AttestationUpsertWithWhereUniqueWithoutContributionInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateManyWithoutContributionInput", {
  isAbstract: true
})
export class AttestationUpdateManyWithoutContributionInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutContributionInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutContributionInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpsertWithWhereUniqueWithoutContributionInput], {
    nullable: true
  })
  upsert?: AttestationUpsertWithWhereUniqueWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManyContributionInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManyContributionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  set?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  delete?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  connect?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpdateWithWhereUniqueWithoutContributionInput], {
    nullable: true
  })
  update?: AttestationUpdateWithWhereUniqueWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpdateManyWithWhereWithoutContributionInput], {
    nullable: true
  })
  updateMany?: AttestationUpdateManyWithWhereWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttestationScalarWhereInput[] | undefined;
}
