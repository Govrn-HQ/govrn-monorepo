import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityTypeOrderByWithAggregationInput } from '../../../inputs/CategoryActivityTypeOrderByWithAggregationInput';
import { CategoryActivityTypeScalarWhereWithAggregatesInput } from '../../../inputs/CategoryActivityTypeScalarWhereWithAggregatesInput';
import { CategoryActivityTypeWhereInput } from '../../../inputs/CategoryActivityTypeWhereInput';
import { CategoryActivityTypeScalarFieldEnum } from '../../../../enums/CategoryActivityTypeScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereInput, {
    nullable: true,
  })
  where?: CategoryActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [CategoryActivityTypeOrderByWithAggregationInput],
    {
      nullable: true,
    },
  )
  orderBy?: CategoryActivityTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | 'id'
    | 'createdAt'
    | 'updatedAt'
    | 'category_activity_id'
    | 'activity_type_id'
  >;

  @TypeGraphQL.Field(
    _type => CategoryActivityTypeScalarWhereWithAggregatesInput,
    {
      nullable: true,
    },
  )
  having?: CategoryActivityTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
