import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityTypeCreateInput } from '../../../inputs/CategoryActivityTypeCreateInput';
import { CategoryActivityTypeUpdateInput } from '../../../inputs/CategoryActivityTypeUpdateInput';
import { CategoryActivityTypeWhereUniqueInput } from '../../../inputs/CategoryActivityTypeWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeCreateInput, {
    nullable: false,
  })
  create!: CategoryActivityTypeCreateInput;

  @TypeGraphQL.Field(_type => CategoryActivityTypeUpdateInput, {
    nullable: false,
  })
  update!: CategoryActivityTypeUpdateInput;
}
