import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearJobRunOrderByWithRelationInput } from "../../../inputs/LinearJobRunOrderByWithRelationInput";
import { LinearJobRunWhereInput } from "../../../inputs/LinearJobRunWhereInput";
import { LinearJobRunWhereUniqueInput } from "../../../inputs/LinearJobRunWhereUniqueInput";
import { LinearJobRunScalarFieldEnum } from "../../../../enums/LinearJobRunScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLinearJobRunArgs {
  @TypeGraphQL.Field(_type => LinearJobRunWhereInput, {
    nullable: true
  })
  where?: LinearJobRunWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearJobRunOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LinearJobRunOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearJobRunWhereUniqueInput, {
    nullable: true
  })
  cursor?: LinearJobRunWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LinearJobRunScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "completedDate" | "startDate"> | undefined;
}
