import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserActivityCreateManyInput } from '../../../inputs/UserActivityCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyUserActivityArgs {
  @TypeGraphQL.Field(_type => [UserActivityCreateManyInput], {
    nullable: false,
  })
  data!: UserActivityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
