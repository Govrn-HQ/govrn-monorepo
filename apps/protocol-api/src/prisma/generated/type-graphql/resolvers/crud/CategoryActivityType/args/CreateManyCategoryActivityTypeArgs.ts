import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityTypeCreateManyInput } from '../../../inputs/CategoryActivityTypeCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => [CategoryActivityTypeCreateManyInput], {
    nullable: false,
  })
  data!: CategoryActivityTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
