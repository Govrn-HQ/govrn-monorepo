import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ActivityTypeUpdateManyMutationInput } from '../../../inputs/ActivityTypeUpdateManyMutationInput';
import { ActivityTypeWhereInput } from '../../../inputs/ActivityTypeWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyActivityTypeArgs {
  @TypeGraphQL.Field(_type => ActivityTypeUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActivityTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ActivityTypeWhereInput, {
    nullable: true,
  })
  where?: ActivityTypeWhereInput | undefined;
}
