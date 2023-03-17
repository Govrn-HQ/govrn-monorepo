import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { Attestation } from '../generated/type-graphql/models/Attestation';
import { AttestationUpdateManyMutationInput } from '../generated/type-graphql/resolvers/inputs/AttestationUpdateManyMutationInput';

@TypeGraphQL.InputType('AttestationUserCreateInput', {
  isAbstract: true,
})
export class AttestationUserCreateInput {
  @TypeGraphQL.Field(_type => String)
  address: string;

  @TypeGraphQL.Field(_type => String)
  chainName: string;

  @TypeGraphQL.Field(_type => Number)
  userId: number;

  @TypeGraphQL.Field(_type => String)
  confidenceName: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  contributionId: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationUserCreateInput, {
    nullable: false,
  })
  data!: AttestationUserCreateInput;
}

@TypeGraphQL.InputType('AttestationUserOnChainCreateInput', {
  isAbstract: true,
})
export class AttestationUserOnChainCreateInput {
  @TypeGraphQL.Field(_type => String)
  confidence: string;

  @TypeGraphQL.Field(_type => Number)
  contributionOnChainId: number;

  @TypeGraphQL.Field(_type => Number)
  chainId: number;

  @TypeGraphQL.Field(_type => Number)
  userId: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserOnChainAttestationArgs {
  @TypeGraphQL.Field(_type => AttestationUserOnChainCreateInput, {
    nullable: false,
  })
  data!: AttestationUserOnChainCreateInput;
}

@TypeGraphQL.InputType('AttestationUserOnChainUpdateInput', {
  isAbstract: true,
})
export class AttestationUserOnChainUpdateInput {
  @TypeGraphQL.Field(_type => Number)
  id: number;

  @TypeGraphQL.Field(_type => String)
  confidence: string;

  @TypeGraphQL.Field(_type => Number)
  contributionOnChainId: number;

  @TypeGraphQL.Field(_type => Number)
  userId: number;
}

@TypeGraphQL.ArgsType()
export class UpdateUserOnChainAttestationArgs {
  @TypeGraphQL.Field(_type => Number)
  id: number;

  @TypeGraphQL.Field(_type => String, { nullable: true })
  status?: string;

  @TypeGraphQL.Field(_type => AttestationUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AttestationUpdateManyMutationInput;
}

@TypeGraphQL.Resolver(_of => Attestation)
export class AttestationResolver {
  @TypeGraphQL.Mutation(_returns => Attestation, { nullable: false })
  async createUserAttestation(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserAttestationArgs,
  ) {
    return await prisma.attestation.create({
      data: {
        user: {
          connectOrCreate: {
            create: {
              address: args.data.address,
              chain_type: {
                create: {
                  name: 'Ethereum Mainnet', //unsure about this -- TODO: check
                },
              },
            },
            where: {
              id: args.data.userId,
            },
          },
        },
        contribution: {
          connect: {
            id: args.data.contributionId,
          },
        },
        confidence: {
          connectOrCreate: {
            create: {
              name: `Example`,
            },
            where: {
              name: `Example`,
            },
          },
        },
      },
    });
  }
  @TypeGraphQL.Mutation(_returns => Attestation, { nullable: false })
  async createUserOnChainAttestation(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserOnChainAttestationArgs,
  ) {
    const chainId = await prisma.chain.findUnique({
      where: { chain_id: `${args.data.chainId}` },
    });
    return await prisma.attestation.create({
      data: {
        contribution: {
          connect: {
            chain_id_on_chain_id: {
              on_chain_id: args.data.contributionOnChainId,
              chain_id: chainId.id,
            },
          },
        },
        user: {
          connect: {
            id: args.data.userId,
          },
        },
      },
    });
  }
  @TypeGraphQL.Mutation(_returns => Attestation, { nullable: false })
  async updateUserOnChainAttestation(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateUserOnChainAttestationArgs,
  ) {
    const address = req.session.siwe.data.address;
    const a = await prisma.attestation.findFirst({
      where: {
        AND: [
          { user: { is: { address: { equals: address } } } },
          { id: { equals: args.id } },
        ],
      },
    });
    const update = await prisma.attestation.updateMany({
      data: args.data,
      where: {
        id: a.id,
      },
    });
    if (update.count >= 1) {
      throw `Wrong number of rows updated ${update.count} updateUserOnChainAttestation`;
    }
    if (args.status) {
      return await prisma.attestation.update({
        data: {
          attestation_status: {
            connect: {
              name: args.status,
            },
          },
        },
        where: {
          id: args.id,
        },
      });
    }
  }
}
