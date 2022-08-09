import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeCreateManyActivity_typeInput } from '../inputs/CategoryActivityTypeCreateManyActivity_typeInput';

@TypeGraphQL.InputType(
  'CategoryActivityTypeCreateManyActivity_typeInputEnvelope',
  {
    isAbstract: true,
  },
)
export class CategoryActivityTypeCreateManyActivity_typeInputEnvelope {
  @TypeGraphQL.Field(
    _type => [CategoryActivityTypeCreateManyActivity_typeInput],
    {
      nullable: false,
    },
  )
  data!: CategoryActivityTypeCreateManyActivity_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
