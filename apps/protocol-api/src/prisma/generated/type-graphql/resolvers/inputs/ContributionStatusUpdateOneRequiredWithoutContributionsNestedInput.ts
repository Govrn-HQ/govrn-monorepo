import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionStatusCreateOrConnectWithoutContributionsInput } from "../inputs/ContributionStatusCreateOrConnectWithoutContributionsInput";
import { ContributionStatusCreateWithoutContributionsInput } from "../inputs/ContributionStatusCreateWithoutContributionsInput";
import { ContributionStatusUpdateWithoutContributionsInput } from "../inputs/ContributionStatusUpdateWithoutContributionsInput";
import { ContributionStatusUpsertWithoutContributionsInput } from "../inputs/ContributionStatusUpsertWithoutContributionsInput";
import { ContributionStatusWhereUniqueInput } from "../inputs/ContributionStatusWhereUniqueInput";

@TypeGraphQL.InputType("ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput", {
  isAbstract: true
})
export class ContributionStatusUpdateOneRequiredWithoutContributionsNestedInput {
  @TypeGraphQL.Field(_type => ContributionStatusCreateWithoutContributionsInput, {
    nullable: true
  })
  create?: ContributionStatusCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusCreateOrConnectWithoutContributionsInput, {
    nullable: true
  })
  connectOrCreate?: ContributionStatusCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusUpsertWithoutContributionsInput, {
    nullable: true
  })
  upsert?: ContributionStatusUpsertWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusUpdateWithoutContributionsInput, {
    nullable: true
  })
  update?: ContributionStatusUpdateWithoutContributionsInput | undefined;
}
