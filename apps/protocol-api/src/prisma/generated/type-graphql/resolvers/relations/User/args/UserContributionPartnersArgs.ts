import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PartnerOrderByWithRelationInput } from '../../../inputs/PartnerOrderByWithRelationInput';
import { PartnerWhereInput } from '../../../inputs/PartnerWhereInput';
import { PartnerWhereUniqueInput } from '../../../inputs/PartnerWhereUniqueInput';
import { PartnerScalarFieldEnum } from '../../../../enums/PartnerScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class UserContributionPartnersArgs {
  @TypeGraphQL.Field(_type => PartnerWhereInput, {
    nullable: true,
  })
  where?: PartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PartnerOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: PartnerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PartnerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PartnerScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<'id' | 'createdAt' | 'updatedAt' | 'user_id' | 'contribution_id'>
    | undefined;
}
