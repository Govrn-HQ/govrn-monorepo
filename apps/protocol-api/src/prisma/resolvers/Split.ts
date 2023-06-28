import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { User } from '../generated/type-graphql/models/User';
import { UserSplitContract } from '../generated/type-graphql/models/UserSplitContract';
import { SplitContract } from '../generated/type-graphql/models/SplitContract';
import { SplitContractPayment } from '../generated/type-graphql/models/SplitContractPayment';
import { Int } from 'type-graphql';

@TypeGraphQL.InputType('UserSplitContractCreateCustomInput', {
  isAbstract: true,
})
export class UserSplitContractCreateCustomInput {
  @TypeGraphQL.Field(_type => Number)
  user_id: number;

  @TypeGraphQL.Field(_type => String)
  split_contract_address: string;

  @TypeGraphQL.Field(_type => Number)
  chain_db_id: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserSplitContractCustomArgs {
  @TypeGraphQL.Field(_type => UserSplitContractCreateCustomInput, {
    nullable: false,
  })
  data!: UserSplitContractCreateCustomInput;
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
  @TypeGraphQL.Field(_type => UserSplitContractUpdateCustomInput, {
    nullable: false,
  })
  data!: UserSplitContractUpdateCustomInput;
}

@TypeGraphQL.InputType('SplitContractPaymentCreateCustomInput', {
  isAbstract: true,
})
export class SplitContractPaymentCreateCustomInput {
  @TypeGraphQL.Field(_type => Number)
  user_id: number;
}

@TypeGraphQL.ArgsType()
export class CreateSplitContractPaymentCustomArgs {
  @TypeGraphQL.Field(_type => SplitContractPaymentCreateCustomInput, {
    nullable: false,
  })
  data!: SplitContractPaymentCreateCustomInput;
}

@TypeGraphQL.Resolver(_of => User)
export class SplitCustomResolver {
  @TypeGraphQL.Mutation(_returns => UserSplitContract, { nullable: false })
  async createUserSplitContract(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserSplitContractCustomArgs,
  ) {
    // validate chain
    // validate user
    // create UserSplitContract; SplitContract
    // return UserSplitContract
  }

  @TypeGraphQL.Mutation(_returns => [UserSplitContract], { nullable: false })
  async updateUserSplitContractEnabled(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: UpdateUserSplitContractCustomArgs,
  ) {
    // validate permissions; user split contract
    // update UserSplitContract
    // return UserSplitContract
  }

  @TypeGraphQL.Mutation(_returns => [], { nullable: false })
  async createSplitContractPayment(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateSplitContractPaymentCustomArgs,
  ) {
    // validate permissions; user split contract
    // update UserSplitContract
    // return UserSplitContract
  }
}
