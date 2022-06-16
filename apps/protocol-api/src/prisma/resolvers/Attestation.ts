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

  @TypeGraphQL.Field((_type) => String)
  contributionId: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserAttestationArgs {
  @TypeGraphQL.Field((_type) => AttestationUserCreateInput, {
    nullable: false,
  })
  data!: AttestationUserCreateInput;
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
          connect: {
            create: {
              address: args.data.address,
              chain_type: {
                createOrConnct: {
                  name: 'Ethereum Mainnet', //unsure about this -- TODO: check
                },
              },
            },
            where: {
              id: args.data.userId,
            },
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
    });
  }
}
