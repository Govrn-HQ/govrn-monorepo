import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateWithoutAssingned_issuesInput } from "../inputs/LinearUserCreateWithoutAssingned_issuesInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserCreateOrConnectWithoutAssingned_issuesInput", {
  isAbstract: true
})
export class LinearUserCreateOrConnectWithoutAssingned_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: false
  })
  where!: LinearUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearUserCreateWithoutAssingned_issuesInput, {
    nullable: false
  })
  create!: LinearUserCreateWithoutAssingned_issuesInput;
}
