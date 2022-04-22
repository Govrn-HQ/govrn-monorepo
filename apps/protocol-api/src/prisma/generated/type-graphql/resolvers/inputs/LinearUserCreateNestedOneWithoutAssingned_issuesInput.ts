import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserCreateOrConnectWithoutAssingned_issuesInput } from "../inputs/LinearUserCreateOrConnectWithoutAssingned_issuesInput";
import { LinearUserCreateWithoutAssingned_issuesInput } from "../inputs/LinearUserCreateWithoutAssingned_issuesInput";
import { LinearUserWhereUniqueInput } from "../inputs/LinearUserWhereUniqueInput";

@TypeGraphQL.InputType("LinearUserCreateNestedOneWithoutAssingned_issuesInput", {
  isAbstract: true
})
export class LinearUserCreateNestedOneWithoutAssingned_issuesInput {
  @TypeGraphQL.Field(_type => LinearUserCreateWithoutAssingned_issuesInput, {
    nullable: true
  })
  create?: LinearUserCreateWithoutAssingned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateOrConnectWithoutAssingned_issuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearUserCreateOrConnectWithoutAssingned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearUserWhereUniqueInput | undefined;
}
