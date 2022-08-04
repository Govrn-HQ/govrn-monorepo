import * as TypeGraphQL from 'type-graphql';
import { LinearCycle } from '../../../models/LinearCycle';
import { LinearIssue } from '../../../models/LinearIssue';
import { LinearCycleIssuesArgs } from './args/LinearCycleIssuesArgs';
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver(_of => LinearCycle)
export class LinearCycleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [LinearIssue], {
    nullable: false,
  })
  async issues(
    @TypeGraphQL.Root() linearCycle: LinearCycle,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: LinearCycleIssuesArgs,
  ): Promise<LinearIssue[]> {
    return getPrismaFromContext(ctx)
      .linearCycle.findUnique({
        where: {
          id: linearCycle.id,
        },
      })
      .issues(args);
  }
}
