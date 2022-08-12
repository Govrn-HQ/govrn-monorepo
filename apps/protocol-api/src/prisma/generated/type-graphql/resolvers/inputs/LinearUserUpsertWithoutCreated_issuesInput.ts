import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateWithoutCreated_issuesInput } from "../inputs/LinearUserCreateWithoutCreated_issuesInput";
import { LinearUserUpdateWithoutCreated_issuesInput } from "../inputs/LinearUserUpdateWithoutCreated_issuesInput";

@TypeGraphQL.InputType("LinearUserUpsertWithoutCreated_issuesInput", {
  isAbstract: true
})
export class LinearUserUpsertWithoutCreated_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserUpdateWithoutCreated_issuesInput, {
    nullable: false
  })
  update!: LinearUserUpdateWithoutCreated_issuesInput;

  @TypeGraphQL.Field(_type => LinearUserCreateWithoutCreated_issuesInput, {
    nullable: false
  })
  create!: LinearUserCreateWithoutCreated_issuesInput;
}
