import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueScalarWhereInput } from "../inputs/LinearIssueScalarWhereInput";
import { LinearIssueUpdateManyMutationInput } from "../inputs/LinearIssueUpdateManyMutationInput";

@TypeGraphQL.InputType("LinearIssueUpdateManyWithWhereWithoutCreatorInput", {
  isAbstract: true
})
export class LinearIssueUpdateManyWithWhereWithoutCreatorInput {
  @TypeGraphQL.Field(_type => LinearIssueScalarWhereInput, {
    nullable: false
  })
  where!: LinearIssueScalarWhereInput;

  @TypeGraphQL.Field(_type => LinearIssueUpdateManyMutationInput, {
    nullable: false
  })
  data!: LinearIssueUpdateManyMutationInput;
}
