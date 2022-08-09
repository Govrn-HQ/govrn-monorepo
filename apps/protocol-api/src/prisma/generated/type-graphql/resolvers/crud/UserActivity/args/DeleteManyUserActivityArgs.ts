import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserActivityWhereInput } from '../../../inputs/UserActivityWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyUserActivityArgs {
  @TypeGraphQL.Field(_type => UserActivityWhereInput, {
    nullable: true,
  })
  where?: UserActivityWhereInput | undefined;
}
