import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { LinearCycleCreateManyInput } from '../../../inputs/LinearCycleCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyLinearCycleArgs {
  @TypeGraphQL.Field(_type => [LinearCycleCreateManyInput], {
    nullable: false,
  })
  data!: LinearCycleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
