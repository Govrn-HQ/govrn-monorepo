import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearTeamOrderByWithAggregationInput } from '../../../inputs/LinearTeamOrderByWithAggregationInput';
import { LinearTeamScalarWhereWithAggregatesInput } from '../../../inputs/LinearTeamScalarWhereWithAggregatesInput';
import { LinearTeamWhereInput } from '../../../inputs/LinearTeamWhereInput';
import { LinearTeamScalarFieldEnum } from '../../../../enums/LinearTeamScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByLinearTeamArgs {
  @TypeGraphQL.Field(_type => LinearTeamWhereInput, {
    nullable: true,
  })
  where?: LinearTeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearTeamOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: LinearTeamOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearTeamScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'linear_id' | 'name' | 'key'>;

  @TypeGraphQL.Field(_type => LinearTeamScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: LinearTeamScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
