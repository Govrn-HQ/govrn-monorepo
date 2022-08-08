import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { TwitterAccountOrderByWithRelationInput } from '../../../inputs/TwitterAccountOrderByWithRelationInput';
import { TwitterAccountWhereInput } from '../../../inputs/TwitterAccountWhereInput';
import { TwitterAccountWhereUniqueInput } from '../../../inputs/TwitterAccountWhereUniqueInput';
import { TwitterAccountScalarFieldEnum } from '../../../../enums/TwitterAccountScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class FindFirstTwitterAccountArgs {
  @TypeGraphQL.Field(_type => TwitterAccountWhereInput, {
    nullable: true,
  })
  where?: TwitterAccountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: TwitterAccountOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountWhereUniqueInput, {
    nullable: true,
  })
  cursor?: TwitterAccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TwitterAccountScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<'id' | 'createdAt' | 'updatedAt' | 'account_name' | 'guild_id'>
    | undefined;
}
