import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateOrConnectWithoutContributionInput } from "../inputs/LinearIssueCreateOrConnectWithoutContributionInput";
import { LinearIssueCreateWithoutContributionInput } from "../inputs/LinearIssueCreateWithoutContributionInput";
import { LinearIssueUpdateWithoutContributionInput } from "../inputs/LinearIssueUpdateWithoutContributionInput";
import { LinearIssueUpsertWithoutContributionInput } from "../inputs/LinearIssueUpsertWithoutContributionInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpdateOneWithoutContributionInput", {
  isAbstract: true
})
export class LinearIssueUpdateOneWithoutContributionInput {
  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutContributionInput, {
    nullable: true
  })
  create?: LinearIssueCreateWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateOrConnectWithoutContributionInput, {
    nullable: true
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueUpsertWithoutContributionInput, {
    nullable: true
  })
  upsert?: LinearIssueUpsertWithoutContributionInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearIssueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutContributionInput, {
    nullable: true
  })
  update?: LinearIssueUpdateWithoutContributionInput | undefined;
}
