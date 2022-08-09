import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserActivityOrderByWithRelationInput } from '../../../inputs/UserActivityOrderByWithRelationInput';
import { UserActivityWhereInput } from '../../../inputs/UserActivityWhereInput';
import { UserActivityWhereUniqueInput } from '../../../inputs/UserActivityWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateUserActivityArgs {
  @TypeGraphQL.Field(_type => UserActivityWhereInput, {
    nullable: true,
  })
  where?: UserActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserActivityOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: UserActivityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: true,
  })
  cursor?: UserActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
