import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContributionStatusOrderByWithRelationInput } from "../../../inputs/ContributionStatusOrderByWithRelationInput";
import { ContributionStatusWhereInput } from "../../../inputs/ContributionStatusWhereInput";
import { ContributionStatusWhereUniqueInput } from "../../../inputs/ContributionStatusWhereUniqueInput";
import { ContributionStatusScalarFieldEnum } from "../../../../enums/ContributionStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstContributionStatusOrThrowArgs {
  @TypeGraphQL.Field(_type => ContributionStatusWhereInput, {
    nullable: true
  })
  where?: ContributionStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContributionStatusOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContributionStatusOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContributionStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContributionStatusScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name"> | undefined;
}
