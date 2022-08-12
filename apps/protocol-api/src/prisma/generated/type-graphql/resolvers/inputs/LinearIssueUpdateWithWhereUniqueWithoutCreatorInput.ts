import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueUpdateWithoutCreatorInput } from "../inputs/LinearIssueUpdateWithoutCreatorInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpdateWithWhereUniqueWithoutCreatorInput", {
  isAbstract: true
})
export class LinearIssueUpdateWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutCreatorInput, {
    nullable: false
  })
  data!: LinearIssueUpdateWithoutCreatorInput;
}
