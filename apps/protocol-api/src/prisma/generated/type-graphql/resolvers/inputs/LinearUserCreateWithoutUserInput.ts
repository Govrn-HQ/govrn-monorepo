import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateNestedManyWithoutAssigneeInput } from "../inputs/LinearIssueCreateNestedManyWithoutAssigneeInput";
import { LinearIssueCreateNestedManyWithoutCreatorInput } from "../inputs/LinearIssueCreateNestedManyWithoutCreatorInput";

@TypeGraphQL.InputType("LinearUserCreateWithoutUserInput", {
  isAbstract: true
})
export class LinearUserCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  displayName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linear_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateNestedManyWithoutAssigneeInput, {
    nullable: true
  })
  assingned_issues?: LinearIssueCreateNestedManyWithoutAssigneeInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  created_issues?: LinearIssueCreateNestedManyWithoutCreatorInput | undefined;
}
