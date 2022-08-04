import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { TwitterUserWhereUniqueInput } from '../../../inputs/TwitterUserWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class DeleteTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserWhereUniqueInput, {
    nullable: false,
  })
  where!: TwitterUserWhereUniqueInput;
}
