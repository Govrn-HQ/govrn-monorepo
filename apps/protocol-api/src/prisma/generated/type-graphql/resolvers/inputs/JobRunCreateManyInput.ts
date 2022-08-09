import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.InputType('JobRunCreateManyInput', {
  isAbstract: true,
})
export class JobRunCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  completedDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;
}
