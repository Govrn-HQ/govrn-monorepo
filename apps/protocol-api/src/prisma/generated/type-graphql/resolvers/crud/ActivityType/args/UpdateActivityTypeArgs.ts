import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ActivityTypeUpdateInput } from '../../../inputs/ActivityTypeUpdateInput';
import { ActivityTypeWhereUniqueInput } from '../../../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpdateActivityTypeArgs {
  @TypeGraphQL.Field(_type => ActivityTypeUpdateInput, {
    nullable: false,
  })
  data!: ActivityTypeUpdateInput;

  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityTypeWhereUniqueInput;
}
