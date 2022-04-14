import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateWithoutAssingned_issuesInput } from "../inputs/LinearUserCreateWithoutAssingned_issuesInput";
import { LinearUserUpdateWithoutAssingned_issuesInput } from "../inputs/LinearUserUpdateWithoutAssingned_issuesInput";

@TypeGraphQL.InputType("LinearUserUpsertWithoutAssingned_issuesInput", {
  isAbstract: true
})
export class LinearUserUpsertWithoutAssingned_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserUpdateWithoutAssingned_issuesInput, {
    nullable: false
  })
  update!: LinearUserUpdateWithoutAssingned_issuesInput;

  @TypeGraphQL.Field(_type => LinearUserCreateWithoutAssingned_issuesInput, {
    nullable: false
  })
  create!: LinearUserCreateWithoutAssingned_issuesInput;
}
