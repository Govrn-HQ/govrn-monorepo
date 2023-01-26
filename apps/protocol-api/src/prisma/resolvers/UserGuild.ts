import * as TypeGraphQL from 'type-graphql';
import { GuildUser } from '../generated/type-graphql';
import { Context } from './types';

@TypeGraphQL.InputType('GuildUserCreateCustomInput', {
  isAbstract: true,
})
export class GuildUserCreateCustomInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  userId?: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  guildId: number;

  @TypeGraphQL.Field(_type => String, { nullable: true })
  userAddress?: string;

  @TypeGraphQL.Field(_type => String, { nullable: true })
  membershipStatus?: string;
}

@TypeGraphQL.ArgsType()
export class CreateGuildUserCustomArgs {
  @TypeGraphQL.Field(_type => GuildUserCreateCustomInput, {
    nullable: false,
  })
  data!: GuildUserCreateCustomInput;
}

@TypeGraphQL.InputType('GuildUserUpdateCustomInput', {
  isAbstract: true,
})
export class GuildUserUpdateCustomInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  userId: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  guildId: number;

  @TypeGraphQL.Field(_type => Boolean)
  favorite: boolean;
}

@TypeGraphQL.ArgsType()
export class UpdateGuildUserCustomArgs {
  @TypeGraphQL.Field(_type => GuildUserUpdateCustomInput, {
    nullable: false,
  })
  data!: GuildUserUpdateCustomInput;
}

@TypeGraphQL.Resolver(_of => GuildUser)
export class GuildUserCustomResolver {
  @TypeGraphQL.Mutation(_returns => GuildUser, {
    nullable: false,
  })
  async createGuildUserCustom(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: CreateGuildUserCustomArgs,
  ) {
    const address = req.session.siwe.data.address;

    const user = await prisma.user.findFirst({
      where: { address: { equals: address } },
    });

    if (user?.id !== args.data.userId) {
      throw new Error('Signature address does not equal requested address');
    }

    return await prisma.guildUser.create({
      data: {
        user: {
          connectOrCreate: {
            create: {
              address: args.data.userAddress,
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
            where: {
              id: args.data.userId,
              address: args.data.userAddress,
            },
          },
        },
        guild: {
          connect: {
            id: args.data.guildId,
          },
        },
        membershipStatus: {
          connect: {
            name: args.data.membershipStatus ?? 'Recruit',
          },
        },
      },
    });
  }

  @TypeGraphQL.Mutation(_returns => GuildUser, {
    nullable: false,
  })
  async updateGuildUserCustom(
    @TypeGraphQL.Ctx() { prisma, req }: Context,
    @TypeGraphQL.Args() args: UpdateGuildUserCustomArgs,
  ) {
    const address = req.session.siwe.data.address;

    const user = await prisma.user.findFirst({
      where: { address: { equals: address } },
    });

    if (user?.id !== args.data.userId) {
      throw new Error('Signature address does not equal requested address');
    }

    return await prisma.guildUser.update({
      data: {
        favorite: { set: args.data.favorite },
      },
      where: {
        user_id_guild_id: {
          guild_id: args.data.guildId,
          user_id: args.data.userId,
        },
      },
    });
  }
}
