import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserActivityCreateInput } from '../../../inputs/UserActivityCreateInput';
import { UserActivityUpdateInput } from '../../../inputs/UserActivityUpdateInput';
import { UserActivityWhereUniqueInput } from '../../../inputs/UserActivityWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertUserActivityArgs {
  @TypeGraphQL.Field(_type => UserActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: UserActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserActivityCreateInput, {
    nullable: false,
  })
  create!: UserActivityCreateInput;

  @TypeGraphQL.Field(_type => UserActivityUpdateInput, {
    nullable: false,
  })
  update!: UserActivityUpdateInput;
}
