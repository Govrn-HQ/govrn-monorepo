import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { TwitterUserCreateInput } from '../../../inputs/TwitterUserCreateInput';

@TypeGraphQL.ArgsType()
export class CreateTwitterUserArgs {
  @TypeGraphQL.Field(_type => TwitterUserCreateInput, {
    nullable: false,
  })
  data!: TwitterUserCreateInput;
}
