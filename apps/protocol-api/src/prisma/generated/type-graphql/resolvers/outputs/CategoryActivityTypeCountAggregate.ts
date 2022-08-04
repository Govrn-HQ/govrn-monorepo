import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('CategoryActivityTypeCountAggregate', {
  isAbstract: true,
})
export class CategoryActivityTypeCountAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  createdAt!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  updatedAt!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  category_activity_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  activity_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  _all!: number;
}
