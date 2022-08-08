import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PartnerOrderByWithAggregationInput } from '../../../inputs/PartnerOrderByWithAggregationInput';
import { PartnerScalarWhereWithAggregatesInput } from '../../../inputs/PartnerScalarWhereWithAggregatesInput';
import { PartnerWhereInput } from '../../../inputs/PartnerWhereInput';
import { PartnerScalarFieldEnum } from '../../../../enums/PartnerScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByPartnerArgs {
  @TypeGraphQL.Field(_type => PartnerWhereInput, {
    nullable: true,
  })
  where?: PartnerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PartnerOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PartnerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'createdAt' | 'updatedAt' | 'user_id' | 'contribution_id'>;

  @TypeGraphQL.Field(_type => PartnerScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PartnerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
