import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PartnerWhereUniqueInput } from '../../../inputs/PartnerWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class DeletePartnerArgs {
  @TypeGraphQL.Field(_type => PartnerWhereUniqueInput, {
    nullable: false,
  })
  where!: PartnerWhereUniqueInput;
}
