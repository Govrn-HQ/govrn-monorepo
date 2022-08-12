import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueUpdateWithoutProjectInput } from "../inputs/LinearIssueUpdateWithoutProjectInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpdateWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class LinearIssueUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: LinearIssueUpdateWithoutProjectInput;
}
