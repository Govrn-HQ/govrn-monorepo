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
}

@TypeGraphQL.InputType('UserContributionCreateCustomInput', {
  isAbstract: true,
})
export class UserContributionCreateCustomInput {
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
}

@TypeGraphQL.ArgsType()
export class CreateUserContributionArgs {
  @TypeGraphQL.Field((_type) => UserContributionCreateInput, {
    nullable: false,
  })
  data!: UserContributionCreateInput;
}

@TypeGraphQL.ArgsType()
export class CreateUserContributionCustomArgs {
  @TypeGraphQL.Field((_type) => UserContributionCreateCustomInput, {
    nullable: false,
  })
  data!: UserContributionCreateCustomInput;
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

@TypeGraphQL.InputType('UserContributionUpdateCustomInput', {
  isAbstract: true,
})
export class UserContributionUpdateCustomInput {
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

@TypeGraphQL.ArgsType()
export class UpdateUserContributionCustomArgs {
  @TypeGraphQL.Field((_type) => UserContributionUpdateCustomInput, {
    nullable: false,
  })
  data!: UserContributionUpdateCustomInput;
}

@TypeGraphQL.Resolver((_of) => Contribution)
export class ContributionCustomResolver {
  @TypeGraphQL.Mutation((_returns) => Contribution, { nullable: false })
  async createUserContributionCustom(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: CreateUserContributionCustomArgs
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
  async updateUserContributionCustom(
    @TypeGraphQL.Ctx() { prisma }: Context,
    @TypeGraphQL.Args() args: UpdateUserContributionCustomArgs
  ) {
    return prisma.contribution.update({
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
        name: {
          set: args.data.name,
        },
        details: {
          set: args.data.details,
        },
        proof: {
          set: args.data.proof,
        },
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
        date_of_engagement: {
          set: args.data.dateOfEngagement,
        },
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
      where: {
        id: args.data.contributionId,
      },
    });
  }
}
