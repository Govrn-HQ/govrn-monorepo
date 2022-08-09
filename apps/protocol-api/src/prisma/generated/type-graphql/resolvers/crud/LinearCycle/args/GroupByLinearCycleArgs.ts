import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearCycleOrderByWithAggregationInput } from '../../../inputs/LinearCycleOrderByWithAggregationInput';
import { LinearCycleScalarWhereWithAggregatesInput } from '../../../inputs/LinearCycleScalarWhereWithAggregatesInput';
import { LinearCycleWhereInput } from '../../../inputs/LinearCycleWhereInput';
import { LinearCycleScalarFieldEnum } from '../../../../enums/LinearCycleScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByLinearCycleArgs {
  @TypeGraphQL.Field(_type => LinearCycleWhereInput, {
    nullable: true,
  })
  where?: LinearCycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearCycleOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: LinearCycleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearCycleScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'number' | 'startsAt' | 'endsAt' | 'linear_id'>;

  @TypeGraphQL.Field(_type => LinearCycleScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: LinearCycleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
