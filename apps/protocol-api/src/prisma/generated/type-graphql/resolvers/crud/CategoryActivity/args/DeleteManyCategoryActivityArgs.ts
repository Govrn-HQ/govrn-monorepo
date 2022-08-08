import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityWhereInput } from '../../../inputs/CategoryActivityWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyCategoryActivityArgs {
  @TypeGraphQL.Field(_type => CategoryActivityWhereInput, {
    nullable: true,
  })
  where?: CategoryActivityWhereInput | undefined;
}
