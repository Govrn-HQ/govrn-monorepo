import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionOrderByWithRelationInput } from '../inputs/ContributionOrderByWithRelationInput';
import { UserOrderByWithRelationInput } from '../inputs/UserOrderByWithRelationInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('PartnerOrderByWithRelationInput', {
  isAbstract: true,
})
export class PartnerOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  user_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  contribution_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => ContributionOrderByWithRelationInput, {
    nullable: true,
  })
  contribution?: ContributionOrderByWithRelationInput | undefined;
}
