import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionRelationFilter } from '../inputs/ContributionRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('PartnerWhereInput', {
  isAbstract: true,
})
export class PartnerWhereInput {
  @TypeGraphQL.Field(_type => [PartnerWhereInput], {
    nullable: true,
  })
  AND?: PartnerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereInput], {
    nullable: true,
  })
  OR?: PartnerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereInput], {
    nullable: true,
  })
  NOT?: PartnerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  contribution_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionRelationFilter, {
    nullable: true,
  })
  contribution?: ContributionRelationFilter | undefined;
}
