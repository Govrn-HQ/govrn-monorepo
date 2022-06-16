import * as TypeGraphQL from 'type-graphql';

import { Context } from './types';
import { Attestation } from '../generated/type-graphql/models/Attestation';

// @Resolver()
// export class CustomUserResolver {
// 	  @Query(returns => User, { nullable: true })
// 	  async bestUser(@Ctx() { prisma }: Context): Promise<User | null> {
// 			    return await prisma.user.findUnique({
// 						      where: { email: "bob@prisma.io" },
// 						    });
// 			  }
// }
//{
//        data: {
//          user: {
//            connectOrCreate: {
//              create: {
//                address: userData.address,
//                chain_type: {
//                  create: {
//                    name: 'Ethereum Mainnet', //unsure about this -- TODO: check
//                  },
//                },
//              },
//              where: {
//                id: userData.id,
//              },
//            },
//          },
//          date_of_attestation: new Date(Date.now()).toISOString(),
//          contribution: {
//            connect: {
//              id: contribution.id,
//            },
//          },
//          confidence: {
//            connectOrCreate: {
//              create: {
//                name: `${values.confidenceLevel}: ${userData.name}`,
//              },
//              where: {
//                name: `${values.confidenceLevel}: ${userData.name}`,
//              },
//            },
//          },

type CreateArgs = {
  address: string;
  chainName: string;
  userId: number;
  confidenceName: string;
  contributionId: number;
};
@TypeGraphQL.InputType('AttestationCreateInput', {
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
    args: CreateArgs
  ) {
    return await prisma.attestation.create({
      data: {
        user: {
          connect: {
            create: {
              address: args.address,
              chain_type: {
                createOrConnct: {
                  name: 'Ethereum Mainnet', //unsure about this -- TODO: check
                },
              },
            },
            where: {
              id: args.userId,
            },
          },
        },
      },
      date_of_attestation: new Date(Date.now()).toISOString(),
      contribution: {
        connect: {
          id: args.contributionId,
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
