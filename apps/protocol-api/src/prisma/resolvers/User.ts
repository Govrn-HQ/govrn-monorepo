import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { User } from '../generated/type-graphql/models/User';
import { Int } from 'type-graphql';

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

  @TypeGraphQL.Field(_type => Number, { nullable: true })
  disconnectDiscordId?: number;
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

@TypeGraphQL.ObjectType('UserSplitPayment', { isAbstract: true })
export class UserSplitPayment {
  @TypeGraphQL.Field(_type => Number)
  amount: number;

  @TypeGraphQL.Field(_type => String)
  erc20_address: string;

  @TypeGraphQL.Field(_type => String)
  chain_id: string;

  @TypeGraphQL.Field(_type => String)
  split_address: string;
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
      // also remove active and token
      extraData = {
        ...extraData,
        linear_users: { disconnect: { id: args.data.disconnectLinearId } },
      };
      await prisma.linearUser.update({
        data: {
          active_token: { set: false },
          access_token: { set: null },
        },
        where: {
          id: args.data.disconnectLinearId,
        },
      });
    }

    if (args.data.disconnectDiscordId) {
      extraData = {
        ...extraData,
        discord_users: { disconnect: { id: args.data.disconnectDiscordId } },
      };
      await prisma.discordUser.update({
        data: {
          active_token: { set: false },
          access_token: { set: null },
        },
        where: {
          id: args.data.disconnectDiscordId,
        },
      });
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

  @TypeGraphQL.Query(_returns => [UserSplitPayment], { nullable: false })
  async getTotalUserTipsSent(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: GetUserArgs,
  ) {
    // could also search for address in user table; but this will make 'anon'
    // payments show up as well
    const payments_from_user = await prisma.splitPayment.findMany({
      where: { sender_user_id: { equals: args.id } },
      select: {
        amount: true,
        token_address: true,
        split_contract: {
          select: {
            address: true,
            chain: {
              select: {
                chain_id: true,
              },
            },
          },
        },
      },
    });
    // TODO: move this into a native query
    const reduced_payments = payments_from_user.reduce(
      (acc, cur) => {
        const chain_id = cur.split_contract.chain.chain_id;
        const split_contract_address = cur.split_contract.address;
        const erc20_address = cur.token_address;
        const amount = cur.amount;
        if (!acc[chain_id]) {
          acc[chain_id] = {};
        }
        if (!acc[chain_id][split_contract_address]) {
          acc[chain_id][split_contract_address] = {};
        }
        if (!acc[chain_id][split_contract_address][erc20_address]) {
          acc[chain_id][split_contract_address][erc20_address] = 0;
        }
        acc[chain_id][split_contract_address][erc20_address] += Number(amount);
        return acc;
      },
      {} as {
        [chain_id: string]: {
          [split_contract_address: string]: {
            [erc20_address: string]: number;
          };
        };
      },
    );

    // flatten reduced_payments into an array of SplitPayment objects
    // TODO: DRY
    const reduced_payments_array = Object.entries(reduced_payments).flatMap(
      ([chain_id, split_contract_address_map]) => {
        return Object.entries(split_contract_address_map).flatMap(
          ([split_contract_address, erc20_address_map]) => {
            return Object.entries(erc20_address_map).map(
              ([erc20_address, amount]) => {
                return {
                  amount,
                  erc20_address,
                  chain_id: chain_id,
                  split_address: split_contract_address,
                };
              },
            );
          },
        );
      },
    );

    return reduced_payments_array;
  }

  @TypeGraphQL.Query(_returns => [UserSplitPayment], { nullable: false })
  async getTotalUserTipsReceived(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: GetUserArgs,
  ) {
    const user = await prisma.user.findUnique({
      where: { id: args.id },
      include: {
        split_contracts: {
          include: {
            split_contract: { include: { split_payments: true, chain: true } },
          },
        },
      },
    });

    let user_payments = {} as {
      [chain_id: string]: {
        [split_contract_address: string]: {
          [erc20_address: string]: number;
        };
      };
    };
    // TODO: move this into a native query
    // TODO: DRY
    for (const user_split_contract of user.split_contracts) {
      for (const split_contract of user_split_contract.split_contract) {
        const chain_id = split_contract.chain.chain_id;
        const split_contract_address = split_contract.address;
        for (const split_payment of split_contract.split_payments) {
          const erc20_address = split_payment.token_address;
          if (!user_payments[chain_id]) {
            user_payments[chain_id] = {};
          }
          if (!user_payments[chain_id][split_contract_address]) {
            user_payments[chain_id][split_contract_address] = {};
          }
          if (!user_payments[chain_id][split_contract_address][erc20_address]) {
            user_payments[chain_id][split_contract_address][erc20_address] = 0;
          }
          user_payments[chain_id][split_contract_address][erc20_address] +=
            Number(split_payment.amount);
        }
      }
    }

    // flatten user_payments into an array of SplitPayment objects
    const user_payments_array = Object.entries(user_payments).flatMap(
      ([chain_id, split_contract_address_map]) => {
        return Object.entries(split_contract_address_map).flatMap(
          ([split_contract_address, erc20_address_map]) => {
            return Object.entries(erc20_address_map).map(
              ([erc20_address, amount]) => {
                return {
                  amount,
                  erc20_address,
                  chain_id: chain_id,
                  split_address: split_contract_address,
                };
              },
            );
          },
        );
      },
    );

    return user_payments_array;
  }
}
