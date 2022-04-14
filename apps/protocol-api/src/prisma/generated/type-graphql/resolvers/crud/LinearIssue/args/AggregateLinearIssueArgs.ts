import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearIssueOrderByWithRelationInput } from "../../../inputs/LinearIssueOrderByWithRelationInput";
import { LinearIssueWhereInput } from "../../../inputs/LinearIssueWhereInput";
import { LinearIssueWhereUniqueInput } from "../../../inputs/LinearIssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLinearIssueArgs {
  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true
  })
  where?: LinearIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LinearIssueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearIssueWhereUniqueInput, {
    nullable: true
  })
  cursor?: LinearIssueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
