import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PartnerUpdateManyMutationInput } from '../../../inputs/PartnerUpdateManyMutationInput';
import { PartnerWhereInput } from '../../../inputs/PartnerWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyPartnerArgs {
  @TypeGraphQL.Field(_type => PartnerUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PartnerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PartnerWhereInput, {
    nullable: true,
  })
  where?: PartnerWhereInput | undefined;
}
