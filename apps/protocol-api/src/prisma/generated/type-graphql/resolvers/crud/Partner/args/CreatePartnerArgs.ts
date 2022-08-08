import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PartnerCreateInput } from '../../../inputs/PartnerCreateInput';

@TypeGraphQL.ArgsType()
export class CreatePartnerArgs {
  @TypeGraphQL.Field(_type => PartnerCreateInput, {
    nullable: false,
  })
  data!: PartnerCreateInput;
}
