import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { User } from '../generated/type-graphql/models/User';

@TypeGraphQL.InputType('UserCreateCustomInput', {
  isAbstract: true,
})
export class UserCreateCustomInput {
  @TypeGraphQL.Field(_type => String)
  username: string;

  @TypeGraphQL.Field(_type => String)
  address: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email?: string | undefined;
}

@TypeGraphQL.InputType('UserUpdateCustomInput', {
  isAbstract: true,
})
export class UserUpdateCustomInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  id: number;

  @TypeGraphQL.Field(_type => String)
  name: string;

  @TypeGraphQL.Field(_type => Number, { nullable: true })
  disconnectLinearId?: number;
}

@TypeGraphQL.ArgsType()
export class UpdateUserCustomArgs {
  @TypeGraphQL.Field(_type => UserUpdateCustomInput, {
    nullable: false,
  })
  data!: UserUpdateCustomInput;
}

@TypeGraphQL.ArgsType()
export class CreateUserCustomArgs {
  @TypeGraphQL.Field(_type => UserCreateCustomInput, {
    nullable: false,
  })
  data!: UserCreateCustomInput;
}

@TypeGraphQL.ArgsType()
export class GetUserArgs {
  @TypeGraphQL.Field(_type => Number)
  id: number;
}

@TypeGraphQL.ArgsType()
export class ListUserArgs {
  @TypeGraphQL.Field(_type => String)
  address: string;
}

@TypeGraphQL.Resolver(_of => User)
export class UserCustomResolver {
  @TypeGraphQL.Query(_returns => User, { nullable: false })
  async getUser(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: GetUserArgs,
  ) {
    return await prisma.user.findUnique({
      where: { id: args.id },
    });
  }

  @TypeGraphQL.Mutation(_returns => User, { nullable: false })
  async createUserCustom(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserCustomArgs,
  ) {
    return await prisma.user.create({
      data: {
        name: args.data.username,
        address: args.data.address,
        email: args.data.email,
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

  @TypeGraphQL.Mutation(_returns => User, { nullable: false })
  async updateUserCustom(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateUserCustomArgs,
  ) {
    const address = req.session.siwe.data.address;
    let extraData = {};
    if (args.data.disconnectLinearId) {
      extraData = {
        ...extraData,
        linear_users: { disconnect: { id: args.data.disconnectLinearId } },
      };
    }
    // conditionally add linear disconnect
    return await prisma.user.update({
      data: { ...extraData, name: { set: args.data.name } },
      where: { address: address },
    });
  }

  @TypeGraphQL.Query(_returns => [User], { nullable: false })
  async listUserByAddress(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: ListUserArgs,
  ) {
    const address = req.session.siwe.data.address;
    if (address !== args.address) {
      throw new Error('Signature address does not equal requested address');
    }
    return await prisma.user.findMany({
      where: { address: { equals: address } },
    });
  }
}
