import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ActivityTypeCreateManyInput } from '../../../inputs/ActivityTypeCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyActivityTypeArgs {
  @TypeGraphQL.Field(_type => [ActivityTypeCreateManyInput], {
    nullable: false,
  })
  data!: ActivityTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
