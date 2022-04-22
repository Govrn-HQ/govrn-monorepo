import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateNestedManyWithoutCreatorInput } from "../inputs/LinearIssueCreateNestedManyWithoutCreatorInput";
import { UserCreateNestedOneWithoutLinear_usersInput } from "../inputs/UserCreateNestedOneWithoutLinear_usersInput";

@TypeGraphQL.InputType("LinearUserCreateWithoutAssingned_issuesInput", {
  isAbstract: true
})
export class LinearUserCreateWithoutAssingned_issuesInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutLinear_usersInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutLinear_usersInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateNestedManyWithoutCreatorInput, {
    nullable: true
  })
  created_issues?: LinearIssueCreateNestedManyWithoutCreatorInput | undefined;
}
