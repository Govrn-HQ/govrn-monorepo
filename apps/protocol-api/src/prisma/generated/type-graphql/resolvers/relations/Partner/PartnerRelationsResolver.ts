import * as TypeGraphQL from 'type-graphql';
import { Contribution } from '../../../models/Contribution';
import { Partner } from '../../../models/Partner';
import { User } from '../../../models/User';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => Partner)
export class PartnerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() partner: Partner,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .partner.findUnique({
        where: {
          id: partner.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver(_type => Contribution, {
    nullable: false,
  })
  async contribution(
    @TypeGraphQL.Root() partner: Partner,
    @TypeGraphQL.Ctx() ctx: any,
  ): Promise<Contribution> {
    return getPrismaFromContext(ctx)
      .partner.findUnique({
        where: {
          id: partner.id,
        },
      })
      .contribution({});
  }
}
