import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearCycleCreateOrConnectWithoutIssuesInput } from "../inputs/LinearCycleCreateOrConnectWithoutIssuesInput";
import { LinearCycleCreateWithoutIssuesInput } from "../inputs/LinearCycleCreateWithoutIssuesInput";
import { LinearCycleUpdateWithoutIssuesInput } from "../inputs/LinearCycleUpdateWithoutIssuesInput";
import { LinearCycleUpsertWithoutIssuesInput } from "../inputs/LinearCycleUpsertWithoutIssuesInput";
import { LinearCycleWhereUniqueInput } from "../inputs/LinearCycleWhereUniqueInput";

@TypeGraphQL.InputType("LinearCycleUpdateOneWithoutIssuesInput", {
  isAbstract: true
})
export class LinearCycleUpdateOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearCycleCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: LinearCycleCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearCycleCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: LinearCycleUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LinearCycleWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearCycleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LinearCycleUpdateWithoutIssuesInput, {
    nullable: true
  })
  update?: LinearCycleUpdateWithoutIssuesInput | undefined;
}
