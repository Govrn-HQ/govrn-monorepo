import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ActivityTypeOrderByWithRelationInput } from '../../../inputs/ActivityTypeOrderByWithRelationInput';
import { ActivityTypeWhereInput } from '../../../inputs/ActivityTypeWhereInput';
import { ActivityTypeWhereUniqueInput } from '../../../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateActivityTypeArgs {
  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true,
  })
  where?: ActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ActivityTypeOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ActivityTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
