import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearCycleOrderByWithRelationInput } from '../../../inputs/LinearCycleOrderByWithRelationInput';
import { LinearCycleWhereInput } from '../../../inputs/LinearCycleWhereInput';
import { LinearCycleWhereUniqueInput } from '../../../inputs/LinearCycleWhereUniqueInput';
import { LinearCycleScalarFieldEnum } from '../../../../enums/LinearCycleScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class FindManyLinearCycleArgs {
  @TypeGraphQL.Field(_type => LinearCycleWhereInput, {
    nullable: true,
  })
  where?: LinearCycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearCycleOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: LinearCycleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LinearCycleWhereUniqueInput, {
    nullable: true,
  })
  cursor?: LinearCycleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LinearCycleScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<'id' | 'number' | 'startsAt' | 'endsAt' | 'linear_id'>
    | undefined;
}
