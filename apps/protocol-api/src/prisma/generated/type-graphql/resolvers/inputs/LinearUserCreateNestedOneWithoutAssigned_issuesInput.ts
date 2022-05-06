import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateOrConnectWithoutAssigned_issuesInput } from "../inputs/LinearUserCreateOrConnectWithoutAssigned_issuesInput";
import { LinearUserCreateWithoutAssigned_issuesInput } from "../inputs/LinearUserCreateWithoutAssigned_issuesInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserCreateNestedOneWithoutAssigned_issuesInput", {
  isAbstract: true
})
export class LinearUserCreateNestedOneWithoutAssigned_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserCreateWithoutAssigned_issuesInput, {
    nullable: true
  })
  create?: LinearUserCreateWithoutAssigned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateOrConnectWithoutAssigned_issuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearUserCreateOrConnectWithoutAssigned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearUserWhereUniqueInput | undefined;
}
