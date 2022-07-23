import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { Attestation } from '../generated/type-graphql/models/Attestation';

@TypeGraphQL.InputType('AttestationUserCreateInput', {
  isAbstract: true,
})
export class AttestationUserCreateInput {
  @TypeGraphQL.Field((_type) => String)
  address: string;

  @TypeGraphQL.Field((_type) => String)
  chainName: string;

  @TypeGraphQL.Field((_type) => Number)
  userId: number;

  @TypeGraphQL.Field((_type) => String)
  confidenceName: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int)
  contributionId: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserAttestationArgs {
  @TypeGraphQL.Field((_type) => AttestationUserCreateInput, {
    nullable: false,
  })
  data!: AttestationUserCreateInput;
}

@TypeGraphQL.InputType('AttestationUserOnChainCreateInput', {
  isAbstract: true,
})
export class AttestationUserOnChainCreateInput {
  @TypeGraphQL.Field((_type) => String)
  confidence: string;

  @TypeGraphQL.Field((_type) => Number)
  contributionOnChainId: number;

  @TypeGraphQL.Field((_type) => Number)
  userId: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserOnChainAttestationArgs {
  @TypeGraphQL.Field((_type) => AttestationUserOnChainCreateInput, {
    nullable: false,
  })
  data!: AttestationUserOnChainCreateInput;
}

@TypeGraphQL.InputType('AttestationUserOnChainUpdateInput', {
  isAbstract: true,
})
export class AttestationUserOnChainUpdateInput {
  @TypeGraphQL.Field((_type) => Number)
  id: number;

  @TypeGraphQL.Field((_type) => String)
  confidence: string;

  @TypeGraphQL.Field((_type) => Number)
  contributionOnChainId: number;

  @TypeGraphQL.Field((_type) => Number)
  userId: number;
}

@TypeGraphQL.ArgsType()
export class UpdateUserOnChainAttestationArgs {
  @TypeGraphQL.Field((_type) => AttestationUserOnChainUpdateInput, {
    nullable: false,
  })
  data!: AttestationUserOnChainUpdateInput;
}

@TypeGraphQL.Resolver((_of) => Attestation)
export class AttestationResolver {
  @TypeGraphQL.Mutation((_returns) => Attestation, { nullable: false })
  async createUserAttestation(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserAttestationArgs
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
        date_of_attestation: new Date(Date.now()).toISOString(),
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
  @TypeGraphQL.Mutation((_returns) => Attestation, { nullable: false })
  async createUserOnChainAttestation(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserOnChainAttestationArgs
  ) {
    return await prisma.attestation.create({
      data: {
        confidence: {
          connect: {
            name: args.data.confidence,
          },
        },
        contribution: {
          connect: {
            on_chain_id: args.data.contributionOnChainId,
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
  @TypeGraphQL.Mutation((_returns) => Attestation, { nullable: false })
  async updateUserOnChainAttestation(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateUserOnChainAttestationArgs
  ) {
    const address = req.session.siwe.data.address;
    const a = await prisma.attestation.findFirst({
      where: {
        AND: [
          { user: { is: { address: { equals: address } } } },
          { id: { equals: args.data.id } },
        ],
      },
    });
    const confidence = await prisma.attestationConfidence.findFirst({
      where: { name: { equals: args.data.confidence } },
    });
    const contribution = await prisma.contribution.findFirst({
      where: { on_chain_id: { equals: args.data.contributionOnChainId } },
    });

    return await prisma.attestation.updateMany({
      data: {
        confidence_id: confidence.id,
        contribution_id: contribution.id,
        user_id: args.data.userId,
      },
      where: {
        id: a.id,
      },
    });
  }
}
