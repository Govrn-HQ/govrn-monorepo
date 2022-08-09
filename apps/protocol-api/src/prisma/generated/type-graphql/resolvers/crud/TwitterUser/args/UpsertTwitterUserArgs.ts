import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { TwitterUserCreateInput } from '../../../inputs/TwitterUserCreateInput';
import { TwitterUserUpdateInput } from '../../../inputs/TwitterUserUpdateInput';
import { TwitterUserWhereUniqueInput } from '../../../inputs/TwitterUserWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: false,
  })
  where!: TwitterUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterUserCreateInput, {
    nullable: false,
  })
  create!: TwitterUserCreateInput;

  @TypeGraphQL.Field(_type => TwitterUserUpdateInput, {
    nullable: false,
  })
  update!: TwitterUserUpdateInput;
}
