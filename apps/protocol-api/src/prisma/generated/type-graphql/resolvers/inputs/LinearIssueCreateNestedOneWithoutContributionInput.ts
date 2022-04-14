import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateOrConnectWithoutContributionInput } from "../inputs/LinearIssueCreateOrConnectWithoutContributionInput";
import { LinearIssueCreateWithoutContributionInput } from "../inputs/LinearIssueCreateWithoutContributionInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueCreateNestedOneWithoutContributionInput", {
  isAbstract: true
})
export class LinearIssueCreateNestedOneWithoutContributionInput {
  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutContributionInput, {
    nullable: true
  })
  create?: LinearIssueCreateWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateOrConnectWithoutContributionInput, {
    nullable: true
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearIssueWhereUniqueInput | undefined;
}
