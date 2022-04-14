import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateWithoutCreated_issuesInput } from "../inputs/LinearUserCreateWithoutCreated_issuesInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserCreateOrConnectWithoutCreated_issuesInput", {
  isAbstract: true
})
export class LinearUserCreateOrConnectWithoutCreated_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: false
  })
  where!: LinearUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => LinearUserCreateWithoutCreated_issuesInput, {
    nullable: false
  })
  create!: LinearUserCreateWithoutCreated_issuesInput;
}
