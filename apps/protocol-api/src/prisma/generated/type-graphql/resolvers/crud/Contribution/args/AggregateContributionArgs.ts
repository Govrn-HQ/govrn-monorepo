import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ContributionOrderByWithRelationInput } from '../../../inputs/ContributionOrderByWithRelationInput';
import { ContributionWhereInput } from '../../../inputs/ContributionWhereInput';
import { ContributionWhereUniqueInput } from '../../../inputs/ContributionWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateContributionArgs {
  @TypeGraphQL.Field(_type => ContributionWhereInput, {
    nullable: true,
  })
  where?: ContributionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContributionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ContributionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
