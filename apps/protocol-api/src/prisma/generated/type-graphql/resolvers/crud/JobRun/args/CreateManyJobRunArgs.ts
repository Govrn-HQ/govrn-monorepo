import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { JobRunCreateManyInput } from '../../../inputs/JobRunCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyJobRunArgs {
  @TypeGraphQL.Field(_type => [JobRunCreateManyInput], {
    nullable: false,
  })
  data!: JobRunCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
