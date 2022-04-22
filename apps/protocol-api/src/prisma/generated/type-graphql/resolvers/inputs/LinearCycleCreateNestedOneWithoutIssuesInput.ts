import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearCycleCreateOrConnectWithoutIssuesInput } from "../inputs/LinearCycleCreateOrConnectWithoutIssuesInput";
import { LinearCycleCreateWithoutIssuesInput } from "../inputs/LinearCycleCreateWithoutIssuesInput";
import { LinearCycleWhereUniqueInput } from "../inputs/LinearCycleWhereUniqueInput";

@TypeGraphQL.InputType("LinearCycleCreateNestedOneWithoutIssuesInput", {
  isAbstract: true
})
export class LinearCycleCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearCycleCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: LinearCycleCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearCycleCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearCycleWhereUniqueInput | undefined;
}
