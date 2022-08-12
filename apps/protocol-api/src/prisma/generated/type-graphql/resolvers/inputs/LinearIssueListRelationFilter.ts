import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueWhereInput } from "../inputs/LinearIssueWhereInput";

@TypeGraphQL.InputType("LinearIssueListRelationFilter", {
  isAbstract: true
})
export class LinearIssueListRelationFilter {
  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true
  })
  every?: LinearIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true
  })
  some?: LinearIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true
  })
  none?: LinearIssueWhereInput | undefined;
}
