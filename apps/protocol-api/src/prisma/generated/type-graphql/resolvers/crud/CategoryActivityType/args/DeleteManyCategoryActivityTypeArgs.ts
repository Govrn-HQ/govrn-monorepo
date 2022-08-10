import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CategoryActivityTypeWhereInput } from '../../../inputs/CategoryActivityTypeWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyCategoryActivityTypeArgs {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereInput, {
    nullable: true,
  })
  where?: CategoryActivityTypeWhereInput | undefined;
}
