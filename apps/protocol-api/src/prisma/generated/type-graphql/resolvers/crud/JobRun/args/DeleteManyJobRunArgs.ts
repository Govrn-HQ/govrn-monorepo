import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { JobRunWhereInput } from '../../../inputs/JobRunWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyJobRunArgs {
  @TypeGraphQL.Field(_type => JobRunWhereInput, {
    nullable: true,
  })
  where?: JobRunWhereInput | undefined;
}
