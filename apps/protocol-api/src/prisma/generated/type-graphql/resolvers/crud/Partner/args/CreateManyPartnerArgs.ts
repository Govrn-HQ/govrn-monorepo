import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PartnerCreateManyInput } from '../../../inputs/PartnerCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyPartnerArgs {
  @TypeGraphQL.Field(_type => [PartnerCreateManyInput], {
    nullable: false,
  })
  data!: PartnerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
