import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityUpdateManyMutationInput } from '../../../inputs/CategoryActivityUpdateManyMutationInput';
import { CategoryActivityWhereInput } from '../../../inputs/CategoryActivityWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CategoryActivityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoryActivityWhereInput, {
    nullable: true,
  })
  where?: CategoryActivityWhereInput | undefined;
}
