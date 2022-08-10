import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearTeamCreateOrConnectWithoutIssuesInput } from "../inputs/LinearTeamCreateOrConnectWithoutIssuesInput";
import { LinearTeamCreateWithoutIssuesInput } from "../inputs/LinearTeamCreateWithoutIssuesInput";
import { LinearTeamUpdateWithoutIssuesInput } from "../inputs/LinearTeamUpdateWithoutIssuesInput";
import { LinearTeamUpsertWithoutIssuesInput } from "../inputs/LinearTeamUpsertWithoutIssuesInput";
import { LinearTeamWhereUniqueInput } from "../inputs/LinearTeamWhereUniqueInput";

@TypeGraphQL.InputType("LinearTeamUpdateOneWithoutIssuesInput", {
  isAbstract: true
})
export class LinearTeamUpdateOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearTeamCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: LinearTeamCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearTeamCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: LinearTeamUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LinearTeamWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearTeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamUpdateWithoutIssuesInput, {
    nullable: true
  })
  update?: LinearTeamUpdateWithoutIssuesInput | undefined;
}
