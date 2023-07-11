import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { User } from '../generated/type-graphql/models/User';
import { UserSplitContract } from '../generated/type-graphql/models/UserSplitContract';
import { SplitContract } from '../generated/type-graphql/models/SplitContract';
import { SplitPayment } from '../generated/type-graphql/models/SplitPayment';
import { Int } from 'type-graphql';
import { link } from 'fs';

@TypeGraphQL.InputType('UserSplitContractCreateCustomInput', {
  isAbstract: true,
})
export class UserSplitContractCreateCustomInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  user_id: number;

  @TypeGraphQL.Field(_type => String)
  split_contract_address: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  chain_db_id: number;

  @TypeGraphQL.Field(_type => String)
  tx_hash: string;
}

@TypeGraphQL.ArgsType()
export class CreateUserSplitContractCustomArgs {
  @TypeGraphQL.Field(_type => UserSplitContractCreateCustomInput, {
    nullable: false,
  })
  data!: UserSplitContractCreateCustomInput;
}

@TypeGraphQL.InputType('UserSplitContractWhereCustomInput', {
  isAbstract: true,
})
export class UserSplitContractWhereCustomInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  user_id: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  user_split_contract_id: number;
}

@TypeGraphQL.InputType('UserSplitContractUpdateCustomInput', {
  isAbstract: true,
})
export class UserSplitContractUpdateCustomInput {
  @TypeGraphQL.Field(_type => Boolean)
  enabled: boolean;
}

@TypeGraphQL.ArgsType()
export class UpdateUserSplitContractCustomArgs {
  @TypeGraphQL.Field(_type => UserSplitContractWhereCustomInput, {
    nullable: false,
  })
  where!: UserSplitContractWhereCustomInput;

  @TypeGraphQL.Field(_type => UserSplitContractUpdateCustomInput, {
    nullable: false,
  })
  data!: UserSplitContractUpdateCustomInput;
}

@TypeGraphQL.InputType('SplitContractPaymentCreateCustomInput', {
  isAbstract: true,
})
export class SplitContractPaymentCreateCustomInput {
  // Contribution id can be null if tipping a user directly
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  contribution_id?: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  recipient_user_id: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  recipient_split_contract_id: number;

  @TypeGraphQL.Field(_type => String)
  token_address: string;

  @TypeGraphQL.Field(_type => Number)
  amount: number;

  @TypeGraphQL.Field(_type => String)
  tx_hash: string;

  @TypeGraphQL.Field(_type => String)
  sender_address: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  sender_user_id?: number;
}

@TypeGraphQL.ArgsType()
export class CreateSplitContractPaymentCustomArgs {
  @TypeGraphQL.Field(_type => SplitContractPaymentCreateCustomInput, {
    nullable: false,
  })
  data!: SplitContractPaymentCreateCustomInput;
}

@TypeGraphQL.Resolver(_of => SplitContract)
export class SplitCustomResolver {
  // validates the split contract id belongs to the supplied user id and is enabled
  async validateUserSplitContract(
    { prisma }: Context,
    user_id: number,
    split_contract_id: number,
    contribution_id?: number,
  ) {
    // validate user split contract exists
    const split_contract = await prisma.splitContract.findUnique({
      where: {
        id: split_contract_id,
      },
    });
    if (!split_contract) {
      throw new Error('Split contract not found for id: ' + split_contract_id);
    }

    // validate supplied split contract has a user split contract
    const user_split_contract = await prisma.userSplitContract.findUnique({
      where: {
        id: split_contract.user_split_contract_id,
      },
    });
    if (!user_split_contract) {
      throw new Error(
        'Split contract id: ' +
          split_contract.id +
          ' has no user split contract',
      );
    }

    // validate the specified user split contract belongs to the specified user
    if (user_split_contract.user_id !== user_id) {
      throw new Error(
        'User split contract id ' +
          user_split_contract.id +
          ' has owning user id ' +
          user_split_contract.user_id +
          ' which does not match supplied user id ' +
          user_id,
      );
    }

    // validate the user has enabled split contracts and that the specified contract is enabled
    if (!user_split_contract.enabled) {
      throw new Error(
        'User id: ' +
          user_id +
          ' has disabled split contract id: ' +
          split_contract_id,
      );
    }

    if (!split_contract.enabled) {
      throw new Error(
        'Split contract id: ' + split_contract_id + ' is disabled',
      );
    }

    // validate the contribution id belongs to the user
    if (contribution_id) {
      const contribution = await prisma.contribution.findUnique({
        where: { id: contribution_id },
      });
      if (!contribution) {
        throw new Error('Contribution not found for id: ' + contribution_id);
      }
      if (contribution.user_id !== user_id) {
        throw new Error(
          'Contribution id: ' +
            contribution_id +
            ' does not belong to user id: ' +
            user_id,
        );
      }
    }

    return split_contract;
  }

  @TypeGraphQL.Mutation(_returns => SplitContract, { nullable: false })
  async createUserSplitContract(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: CreateUserSplitContractCustomArgs,
  ) {
    // validate chain
    const chain = await prisma.chain.findUnique({
      where: { id: args.data.chain_db_id },
    });
    if (!chain) {
      throw new Error('Chain not found for id: ' + args.data.chain_db_id);
    }

    // create UserSplitContract; SplitContract
    const splitContract = await prisma.splitContract.create({
      data: {
        chain: { connect: { id: args.data.chain_db_id } },
        address: args.data.split_contract_address,
        tx_hash: args.data.tx_hash,
        enabled: true,
        user_split_contract: {
          create: {
            user: { connect: { id: args.data.user_id } },
            enabled: true,
          },
        },
      },
    });
    return splitContract;
  }

  @TypeGraphQL.Mutation(_returns => UserSplitContract, { nullable: false })
  async updateUserSplitContract(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateUserSplitContractCustomArgs,
  ) {
    // update UserSplitContract enabled
    const user_split_contract = await prisma.userSplitContract.update({
      where: { id: args.where.user_split_contract_id },
      data: { enabled: args.data.enabled },
    });
    return user_split_contract;
  }

  @TypeGraphQL.Mutation(_returns => SplitPayment, { nullable: false })
  async createSplitContractPayment(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: CreateSplitContractPaymentCustomArgs,
  ) {
    // validate recipient user split contract
    const split_contract = await this.validateUserSplitContract(
      { prisma, req },
      args.data.recipient_user_id,
      args.data.recipient_split_contract_id,
      args.data.contribution_id,
    );

    let split_payment = {} as SplitPayment;
    const sender_address = args.data.sender_address;
    const linkContribution = async (
      split_payment_id: number,
      contribution_id: number,
    ) => {
      await prisma.contributionPayment.create({
        data: {
          split_payment: {
            connect: { id: split_payment_id },
          },
          contribution: {
            connect: { id: contribution_id },
          },
          type: 'TIP',
        },
      });
    };
    if (!args.data.sender_user_id) {
      // anon payment, create split payment without user connect
      split_payment = await prisma.splitPayment.create({
        data: {
          split_contract: {
            connect: { id: split_contract.id },
          },
          token_address: args.data.token_address,
          amount: args.data.amount,
          tx_hash: args.data.tx_hash,
          sender_address: args.data.sender_address,
          recipient_address: '',
        },
      });
      if (args.data.contribution_id) {
        await linkContribution(split_payment.id, args.data.contribution_id);
      }
    } else {
      const sender_user = await prisma.user.findUnique({
        where: { address: sender_address },
      });
      if (!sender_user || sender_user.id !== args.data.sender_user_id) {
        throw new Error(
          'Sender user id: ' +
            args.data.sender_user_id +
            ' does not match sender address: ' +
            sender_address,
        );
      }
      split_payment = await prisma.splitPayment.create({
        data: {
          split_contract: {
            connect: { id: split_contract.id },
          },
          token_address: args.data.token_address,
          amount: args.data.amount,
          tx_hash: args.data.tx_hash,
          sender_address: args.data.sender_address,
          recipient_address: '',
          sender_user: {
            connect: { id: args.data.sender_user_id },
          },
        },
      });
      if (args.data.contribution_id) {
        await linkContribution(split_payment.id, args.data.contribution_id);
      }
    }

    return split_payment;
  }
}
