import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionStatusCreateOrConnectWithoutContributionsInput } from "../inputs/ContributionStatusCreateOrConnectWithoutContributionsInput";
import { ContributionStatusCreateWithoutContributionsInput } from "../inputs/ContributionStatusCreateWithoutContributionsInput";
import { ContributionStatusWhereUniqueInput } from "../inputs/ContributionStatusWhereUniqueInput";

@TypeGraphQL.InputType("ContributionStatusCreateNestedOneWithoutContributionsInput", {
  isAbstract: true
})
export class ContributionStatusCreateNestedOneWithoutContributionsInput {
  @TypeGraphQL.Field(_type => ContributionStatusCreateWithoutContributionsInput, {
    nullable: true
  })
  create?: ContributionStatusCreateWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusCreateOrConnectWithoutContributionsInput, {
    nullable: true
  })
  connectOrCreate?: ContributionStatusCreateOrConnectWithoutContributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionStatusWhereUniqueInput | undefined;
}
