import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearProjectUpdateManyMutationInput } from '../../../inputs/LinearProjectUpdateManyMutationInput';
import { LinearProjectWhereInput } from '../../../inputs/LinearProjectWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyLinearProjectArgs {
  @TypeGraphQL.Field(_type => LinearProjectUpdateManyMutationInput, {
    nullable: false,
  })
  data!: LinearProjectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LinearProjectWhereInput, {
    nullable: true,
  })
  where?: LinearProjectWhereInput | undefined;
}
