import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateOrConnectWithoutCreated_issuesInput } from "../inputs/LinearUserCreateOrConnectWithoutCreated_issuesInput";
import { LinearUserCreateWithoutCreated_issuesInput } from "../inputs/LinearUserCreateWithoutCreated_issuesInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserCreateNestedOneWithoutCreated_issuesInput", {
  isAbstract: true
})
export class LinearUserCreateNestedOneWithoutCreated_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserCreateWithoutCreated_issuesInput, {
    nullable: true
  })
  create?: LinearUserCreateWithoutCreated_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateOrConnectWithoutCreated_issuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearUserCreateOrConnectWithoutCreated_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearUserWhereUniqueInput | undefined;
}
