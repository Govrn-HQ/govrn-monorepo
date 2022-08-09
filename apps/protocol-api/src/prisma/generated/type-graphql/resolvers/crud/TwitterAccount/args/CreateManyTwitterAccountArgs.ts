import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { TwitterAccountCreateManyInput } from '../../../inputs/TwitterAccountCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyTwitterAccountArgs {
  @TypeGraphQL.Field(_type => [TwitterAccountCreateManyInput], {
    nullable: false,
  })
  data!: TwitterAccountCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
