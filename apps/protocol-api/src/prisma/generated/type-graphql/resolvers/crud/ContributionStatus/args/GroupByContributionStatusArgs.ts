import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ContributionStatusOrderByWithAggregationInput } from '../../../inputs/ContributionStatusOrderByWithAggregationInput';
import { ContributionStatusScalarWhereWithAggregatesInput } from '../../../inputs/ContributionStatusScalarWhereWithAggregatesInput';
import { ContributionStatusWhereInput } from '../../../inputs/ContributionStatusWhereInput';
import { ContributionStatusScalarFieldEnum } from '../../../../enums/ContributionStatusScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByContributionStatusArgs {
  @TypeGraphQL.Field(_type => ContributionStatusWhereInput, {
    nullable: true,
  })
  where?: ContributionStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContributionStatusOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ContributionStatusOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContributionStatusScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'createdAt' | 'updatedAt' | 'name'>;

  @TypeGraphQL.Field(
    _type => ContributionStatusScalarWhereWithAggregatesInput,
    {
      nullable: true,
    },
  )
  having?: ContributionStatusScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
