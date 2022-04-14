import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateWithoutProjectInput } from "../inputs/LinearIssueCreateWithoutProjectInput";
import { LinearIssueUpdateWithoutProjectInput } from "../inputs/LinearIssueUpdateWithoutProjectInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpsertWithWhereUniqueWithoutProjectInput", {
  isAbstract: true
})
export class LinearIssueUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: LinearIssueUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutProjectInput, {
    nullable: false
  })
  create!: LinearIssueCreateWithoutProjectInput;
}
