import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ActivityTypeCreateInput } from '../../../inputs/ActivityTypeCreateInput';
import { ActivityTypeUpdateInput } from '../../../inputs/ActivityTypeUpdateInput';
import { ActivityTypeWhereUniqueInput } from '../../../inputs/ActivityTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertActivityTypeArgs {
  @TypeGraphQL.Field(_type => ActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateInput, {
    nullable: false,
  })
  create!: ActivityTypeCreateInput;

  @TypeGraphQL.Field(_type => ActivityTypeUpdateInput, {
    nullable: false,
  })
  update!: ActivityTypeUpdateInput;
}
