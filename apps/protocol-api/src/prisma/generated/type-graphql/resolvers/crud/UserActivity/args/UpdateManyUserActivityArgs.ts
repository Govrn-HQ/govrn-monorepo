import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserActivityUpdateManyMutationInput } from '../../../inputs/UserActivityUpdateManyMutationInput';
import { UserActivityWhereInput } from '../../../inputs/UserActivityWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyUserActivityArgs {
  @TypeGraphQL.Field(_type => UserActivityUpdateManyMutationInput, {
    nullable: false,
  })
  data!: UserActivityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserActivityWhereInput, {
    nullable: true,
  })
  where?: UserActivityWhereInput | undefined;
}
