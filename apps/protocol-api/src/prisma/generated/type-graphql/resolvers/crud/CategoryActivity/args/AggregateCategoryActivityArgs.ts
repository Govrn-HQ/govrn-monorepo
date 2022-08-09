import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityOrderByWithRelationInput } from '../../../inputs/CategoryActivityOrderByWithRelationInput';
import { CategoryActivityWhereInput } from '../../../inputs/CategoryActivityWhereInput';
import { CategoryActivityWhereUniqueInput } from '../../../inputs/CategoryActivityWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityWhereInput, {
    nullable: true,
  })
  where?: CategoryActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CategoryActivityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CategoryActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
