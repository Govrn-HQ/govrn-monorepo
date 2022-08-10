import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueCreateManyProjectInputEnvelope } from "../inputs/LinearIssueCreateManyProjectInputEnvelope";
import { LinearIssueCreateOrConnectWithoutProjectInput } from "../inputs/LinearIssueCreateOrConnectWithoutProjectInput";
import { LinearIssueCreateWithoutProjectInput } from "../inputs/LinearIssueCreateWithoutProjectInput";
import { LinearIssueWhereUniqueInput } from "../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.InputType("LinearIssueCreateNestedManyWithoutProjectInput", {
  isAbstract: true
})
export class LinearIssueCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [LinearIssueCreateWithoutProjectInput], {
    nullable: true
  })
  create?: LinearIssueCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: LinearIssueCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: LinearIssueCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereUniqueInput], {
    nullable: true
  })
  connect?: LinearIssueWhereUniqueInput[] | undefined;
}
