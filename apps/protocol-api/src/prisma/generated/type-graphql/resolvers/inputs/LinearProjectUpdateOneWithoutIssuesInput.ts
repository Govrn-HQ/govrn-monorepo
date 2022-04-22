import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearProjectCreateOrConnectWithoutIssuesInput } from "../inputs/LinearProjectCreateOrConnectWithoutIssuesInput";
import { LinearProjectCreateWithoutIssuesInput } from "../inputs/LinearProjectCreateWithoutIssuesInput";
import { LinearProjectUpdateWithoutIssuesInput } from "../inputs/LinearProjectUpdateWithoutIssuesInput";
import { LinearProjectUpsertWithoutIssuesInput } from "../inputs/LinearProjectUpsertWithoutIssuesInput";
import { LinearProjectWhereUniqueInput } from "../inputs/LinearProjectWhereUniqueInput";

@TypeGraphQL.InputType("LinearProjectUpdateOneWithoutIssuesInput", {
  isAbstract: true
})
export class LinearProjectUpdateOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LinearProjectCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: LinearProjectCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: LinearProjectCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: LinearProjectUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => LinearProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: LinearProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectUpdateWithoutIssuesInput, {
    nullable: true
  })
  update?: LinearProjectUpdateWithoutIssuesInput | undefined;
}
