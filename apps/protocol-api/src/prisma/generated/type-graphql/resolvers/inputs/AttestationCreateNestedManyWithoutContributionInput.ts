import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyContributionInputEnvelope } from "../inputs/AttestationCreateManyContributionInputEnvelope";
import { AttestationCreateOrConnectWithoutContributionInput } from "../inputs/AttestationCreateOrConnectWithoutContributionInput";
import { AttestationCreateWithoutContributionInput } from "../inputs/AttestationCreateWithoutContributionInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateNestedManyWithoutContributionInput", {
  isAbstract: true
})
export class AttestationCreateNestedManyWithoutContributionInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutContributionInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutContributionInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutContributionInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManyContributionInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManyContributionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  connect?: AttestationWhereUniqueInput[] | undefined;
}
