import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { TwitterAccountWhereInput } from '../../../inputs/TwitterAccountWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyTwitterAccountArgs {
  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true,
  })
  where?: TwitterAccountWhereInput | undefined;
}
