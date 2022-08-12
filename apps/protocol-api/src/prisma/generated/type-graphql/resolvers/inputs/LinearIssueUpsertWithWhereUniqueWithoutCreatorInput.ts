import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateWithoutCreatorInput } from "../inputs/LinearIssueCreateWithoutCreatorInput";
import { LinearIssueUpdateWithoutCreatorInput } from "../inputs/LinearIssueUpdateWithoutCreatorInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueUpsertWithWhereUniqueWithoutCreatorInput", {
  isAbstract: true
})
export class LinearIssueUpsertWithWhereUniqueWithoutCreatorInput {
  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: false
  })
  where!: LinearIssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateWithoutCreatorInput, {
    nullable: false
  })
  update!: LinearIssueUpdateWithoutCreatorInput;

  @TypeGraphQL.Field(_type => LinearIssueCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: LinearIssueCreateWithoutCreatorInput;
}
