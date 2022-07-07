import * as TypeGraphQL from 'type-graphql';
import { Context } from './types';
import { Contribution } from '../generated/type-graphql/models/Contribution';

@TypeGraphQL.InputType('UserContributionCreateInput', {
  isAbstract: true,
})
export class UserContributionCreateInput {
  @TypeGraphQL.Field((_type) => String)
  address: string;

  @TypeGraphQL.Field((_type) => String)
  chainName: string;

  @TypeGraphQL.Field((_type) => Number)
  userId: number;

  @TypeGraphQL.Field((_type) => String)
  name: string;

  @TypeGraphQL.Field((_type) => String)
  details: string;

  @TypeGraphQL.Field((_type) => String)
  proof: string;

  @TypeGraphQL.Field((_type) => String)
  activityTypeName: string;

  @TypeGraphQL.Field((_type) => Date)
  dateOfEngagement: Date;

  @TypeGraphQL.Field((_type) => String)
  status: string;

  @TypeGraphQL.Field((_type) => Number)
  guildId: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserContributionArgs {
  @TypeGraphQL.Field((_type) => UserContributionCreateInput, {
    nullable: false,
  })
  data!: UserContributionCreateInput;
}

@TypeGraphQL.InputType('UserOnChainContributionCreateInput', {
  isAbstract: true,
})
export class UserOnChainContributionCreateInput {
  @TypeGraphQL.Field((_type) => Number)
  activityTypeId: number;

  @TypeGraphQL.Field((_type) => String)
  name: string;

  @TypeGraphQL.Field((_type) => String)
  details: string;

  @TypeGraphQL.Field((_type) => Date)
  dateOfSubmission: Date;

  @TypeGraphQL.Field((_type) => Date)
  dateOfEngagement: Date;

  @TypeGraphQL.Field((_type) => String)
  proof: string;

  @TypeGraphQL.Field((_type) => String)
  status: string;

  @TypeGraphQL.Field((_type) => Number)
  userId: number;

  @TypeGraphQL.Field((_type) => Number)
  onChainId: number;
}

@TypeGraphQL.ArgsType()
export class CreateUserOnChainContributionArgs {
  @TypeGraphQL.Field((_type) => UserOnChainContributionCreateInput, {
    nullable: false,
  })
  data!: UserOnChainContributionCreateInput;
}

@TypeGraphQL.InputType('UserContributionUpdateInput', {
  isAbstract: true,
})
export class UserContributionUpdateInput {
  @TypeGraphQL.Field((_type) => String)
  address: string;

  @TypeGraphQL.Field((_type) => String)
  chainName: string;

  @TypeGraphQL.Field((_type) => Number)
  userId: number;

  @TypeGraphQL.Field((_type) => String)
  name: string;

  @TypeGraphQL.Field((_type) => String)
  details: string;

  @TypeGraphQL.Field((_type) => String)
  proof: string;

  @TypeGraphQL.Field((_type) => String)
  activityTypeName: string;

  @TypeGraphQL.Field((_type) => Date)
  dateOfEngagement: Date;

  @TypeGraphQL.Field((_type) => String)
  status: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int)
  contributionId: number;
}

@TypeGraphQL.ArgsType()
export class UpdateUserContributionArgs {
  @TypeGraphQL.Field((_type) => UserContributionUpdateInput, {
    nullable: false,
  })
  data!: UserContributionUpdateInput;
}

@TypeGraphQL.InputType('UserOnChainContributionUpdateInput', {
  isAbstract: true,
})
export class UserOnChainContributionUpdateInput {
  @TypeGraphQL.Field((_type) => String)
  name: string;

  @TypeGraphQL.Field((_type) => String)
  details: string;

  @TypeGraphQL.Field((_type) => Date)
  dateOfEngagement: Date;

  @TypeGraphQL.Field((_type) => Date)
  dateOfSubmission: Date;

  @TypeGraphQL.Field((_type) => String)
  proof: string;

  @TypeGraphQL.Field((_type) => String)
  status: string;

  @TypeGraphQL.Field((_type) => Number)
  onChainId: number;

  @TypeGraphQL.Field((_type) => Number)
  userId: number;

  @TypeGraphQL.Field((_type) => Number)
  id: number;
}

@TypeGraphQL.ArgsType()
export class UpdateUserOnChainContributionArgs {
  @TypeGraphQL.Field((_type) => UserOnChainContributionUpdateInput, {
    nullable: false,
  })
  data!: UserOnChainContributionUpdateInput;
}

@TypeGraphQL.Resolver((_of) => Contribution)
export class ContributionCustomResolver {
  @TypeGraphQL.Mutation((_returns) => Contribution, { nullable: false })
  async createUserContribution(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserContributionArgs
  ) {
    return await prisma.contribution.create({
      data: {
        user: {
          connectOrCreate: {
            create: {
              address: args.data.address,
              chain_type: {
                create: {
                  name: args.data.chainName, //unsure about this -- TODO: check
                },
              },
            },
            where: {
              id: args.data.userId,
            },
          },
        },
        name: args.data.name,
        details: args.data.details,
        proof: args.data.proof,
        activity_type: {
          connectOrCreate: {
            create: {
              name: args.data.activityTypeName,
            },
            where: {
              name: args.data.activityTypeName,
            },
          },
        },
        date_of_engagement: new Date(args.data.dateOfEngagement).toISOString(),
        status: {
          connectOrCreate: {
            create: {
              name: args.data.status,
            },
            where: {
              name: args.data.status,
            },
          },
        },
      },
    });
  }
  @TypeGraphQL.Mutation((_returns) => Contribution, { nullable: false })
  async createOnChainUserContribution(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserOnChainContributionArgs
  ) {
    return await prisma.contribution.create({
      data: {
        activity_type: {
          connect: { id: args.data.activityTypeId },
        },
        name: args.data.name,
        details: args.data.details,
        proof: args.data.proof,
        date_of_engagement: new Date(args.data.dateOfEngagement).toISOString(),
        status: {
          connect: { name: 'minted' },
        },
        user: {
          connect: { id: args.data.userId },
        },
        on_chain_id: args.data.onChainId,
      },
    });
  }

  @TypeGraphQL.Mutation((_returns) => Contribution, { nullable: false })
  async updateUserContribution(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateUserContributionArgs
  ) {
    const address = req.session.siwe.data.address;
    const res = await prisma.contribution.updateMany({
      data: {
        name: {
          set: args.data.name,
        },
        details: {
          set: args.data.details,
        },
        proof: {
          set: args.data.proof,
        },
        date_of_engagement: {
          set: args.data.dateOfEngagement,
        },
      },
      where: {
        AND: [
          {
            id: { equals: args.data.contributionId },
          },
          { user: { is: { address: { equals: address } } } },
        ],
      },
    });
    if (res.count !== 1) {
      throw `Wrong number of rows updated ${res.count} updateUserContribution`;
    }
    return await prisma.contribution.update({
      data: {
        activity_type: {
          connectOrCreate: {
            create: {
              name: args.data.activityTypeName,
            },
            where: {
              name: args.data.activityTypeName,
            },
          },
        },
        user: {
          connectOrCreate: {
            create: {
              address: args.data.address,
              chain_type: {
                create: {
                  name: args.data.chainName, //unsure about this -- TODO: check
                },
              },
            },
            where: {
              id: args.data.userId,
            },
          },
        },
        status: {
          connect: {
            name: args.data.status,
          },
        },
      },
      where: {
        id: args.data.contributionId,
      },
    });
  }

  @TypeGraphQL.Mutation((_returns) => Contribution, { nullable: false })
  async updateUserOnChainContribution(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateUserOnChainContributionArgs
  ) {
    const address = req.session.siwe.data.address;
    const update = await prisma.contribution.updateMany({
      data: {
        name: {
          set: args.data.name,
        },
        details: {
          set: args.data.details,
        },
        proof: {
          set: args.data.proof,
        },
        date_of_engagement: {
          set: args.data.dateOfEngagement,
        },
        date_of_submission: {
          set: args.data.dateOfSubmission,
        },
        on_chain_id: {
          set: args.data.onChainId,
        },
      },
      where: {
        AND: [
          {
            id: { equals: args.data.id },
          },
          { user: { is: { address: { equals: address } } } },
        ],
      },
    });
    if (update.count !== 1) {
      throw `Wrong number of rows updated ${update.count} updateUserOnChainContribution`;
    }
    return await prisma.contribution.update({
      data: {
        status: {
          connect: {
            name: args.data.status,
          },
        },
      },
      where: {
        id: args.data.id,
      },
    });
  }
}
