import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { User } from '../generated/type-graphql/models/User';
import { getPrismaFromContext } from '../generated/type-graphql/helpers';

@TypeGraphQL.InputType('UserCreateCustomInput', {
  isAbstract: true,
})
export class UserCreateCustomInput {
  @TypeGraphQL.Field((_type) => String)
  username: string;

  @TypeGraphQL.Field((_type) => String)
  address: string;
}

@TypeGraphQL.InputType('UserUpdateCustomInput', {
  isAbstract: true,
})
export class UserUpdateCustomInput {
  @TypeGraphQL.Field((_type) => Number)
  id: number;

  @TypeGraphQL.Field((_type) => String)
  name: string;
}

@TypeGraphQL.ArgsType()
export class UpdateUserCustomArgs {
  @TypeGraphQL.Field((_type) => UserUpdateCustomInput, {
    nullable: false,
  })
  data!: UserUpdateCustomInput;
}

@TypeGraphQL.ArgsType()
export class CreateUserCustomArgs {
  @TypeGraphQL.Field((_type) => UserCreateCustomInput, {
    nullable: false,
  })
  data!: UserCreateCustomInput;
}

@TypeGraphQL.ArgsType()
export class GetUserArgs {
  @TypeGraphQL.Field((_type) => Number)
  id: number;
}

@TypeGraphQL.ArgsType()
export class ListUserArgs {
  @TypeGraphQL.Field((_type) => String)
  address: string;
}

@TypeGraphQL.Resolver((_of) => User)
export class UserCustomResolver {
  @TypeGraphQL.Query((_returns) => User, { nullable: false })
  async getUser(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: GetUserArgs
  ) {
    return await prisma.user.findUser({
      where: { id: args.id },
    });
  }

  @TypeGraphQL.Mutation((_returns) => User, { nullable: false })
  async createUserCustom(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserCustomArgs
  ) {
    return await prisma.user.findUser({
      data: {
        name: args.data.username,
        address: args.data.address,
        chain_type: {
          connectOrCreate: {
            create: {
              name: 'ethereum_mainnet',
            },
            where: {
              name: 'ethereum_mainnet',
            },
          },
        },
      },
    });
  }
  @TypeGraphQL.Mutation((_returns) => User, { nullable: false })
  async updateUserCustom(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: UpdateUserCustomArgs
  ) {
    return await prisma.user.update(
      { name: { set: args.data.name } },
      { id: args.data.id }
    );
  }

  @TypeGraphQL.Query((_returns) => [User], { nullable: false })
  async listUserByAddress(
    @TypeGraphQL.Ctx() ctx: Context,
    @TypeGraphQL.Args() args: ListUserArgs
  ) {
    return await getPrismaFromContext(ctx).user.findMany({
      where: { address: { equals: args.address } },
    });
  }
}
