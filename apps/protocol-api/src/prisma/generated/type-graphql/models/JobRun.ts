import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';

@TypeGraphQL.ObjectType('JobRun', {
  isAbstract: true,
})
export class JobRun {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

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
