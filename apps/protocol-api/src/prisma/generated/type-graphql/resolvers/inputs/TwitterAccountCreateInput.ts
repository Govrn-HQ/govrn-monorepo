import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildCreateNestedOneWithoutTwitter_accountInput } from '../inputs/GuildCreateNestedOneWithoutTwitter_accountInput';

@TypeGraphQL.InputType('TwitterAccountCreateInput', {
  isAbstract: true,
})
export class TwitterAccountCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  account_name!: string;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutTwitter_accountInput, {
    nullable: true,
  })
  guild?: GuildCreateNestedOneWithoutTwitter_accountInput | undefined;
}
