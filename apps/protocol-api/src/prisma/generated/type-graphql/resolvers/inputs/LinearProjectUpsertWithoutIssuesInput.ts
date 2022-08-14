import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearProjectCreateWithoutIssuesInput } from "../inputs/LinearProjectCreateWithoutIssuesInput";
import { LinearProjectUpdateWithoutIssuesInput } from "../inputs/LinearProjectUpdateWithoutIssuesInput";

@TypeGraphQL.InputType("LinearProjectUpsertWithoutIssuesInput", {
  isAbstract: true
})
export class LinearProjectUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearProjectUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: LinearProjectUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => LinearProjectCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: LinearProjectCreateWithoutIssuesInput;
}
