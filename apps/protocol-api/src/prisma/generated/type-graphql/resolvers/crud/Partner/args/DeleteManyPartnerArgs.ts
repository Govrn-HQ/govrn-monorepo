import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PartnerWhereInput } from '../../../inputs/PartnerWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyPartnerArgs {
  @TypeGraphQL.Field(_type => PartnerWhereInput, {
    nullable: true,
  })
  where?: PartnerWhereInput | undefined;
}
