import * as TypeGraphQL from 'type-graphql';
import { GuildUser } from '../generated/type-graphql';
import { Context } from './types';

@TypeGraphQL.InputType('GuildUserCreateCustomInput', {
  isAbstract: true,
})
export class GuildUserCreateCustomInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  userId: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int)
  guildId: number;
}

@TypeGraphQL.ArgsType()
export class CreateGuildUserCustomArgs {
  @TypeGraphQL.Field(_type => GuildUserCreateCustomInput, {
    nullable: false,
  })
  data!: GuildUserCreateCustomInput;
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
          connect: {
            id: args.data.userId,
          },
        },
        guild: {
          connect: {
            id: args.data.guildId,
          },
        },
        membershipStatus: {
          connect: {
            name: 'Recruit',
          },
        },
      },
    });
  }
}
