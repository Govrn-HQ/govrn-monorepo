import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityCreateInput } from '../../../inputs/CategoryActivityCreateInput';
import { CategoryActivityUpdateInput } from '../../../inputs/CategoryActivityUpdateInput';
import { CategoryActivityWhereUniqueInput } from '../../../inputs/CategoryActivityWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryActivityCreateInput, {
    nullable: false,
  })
  create!: CategoryActivityCreateInput;

  @TypeGraphQL.Field(_type => CategoryActivityUpdateInput, {
    nullable: false,
  })
  update!: CategoryActivityUpdateInput;
}
