import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityCreateInput } from '../../../inputs/CategoryActivityCreateInput';

@TypeGraphQL.ArgsType()
export class CreateCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityCreateInput, {
    nullable: false,
  })
  data!: CategoryActivityCreateInput;
}
