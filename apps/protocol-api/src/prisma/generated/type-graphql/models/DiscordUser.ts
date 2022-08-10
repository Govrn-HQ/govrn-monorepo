import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { User } from '../models/User';

@TypeGraphQL.ObjectType('DiscordUser', {
  isAbstract: true,
})
export class DiscordUser {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  display_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  discord_id!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  user?: User;
}
