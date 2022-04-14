import * as TypeGraphQL from "type-graphql";
import { Contribution } from "../../../models/Contribution";
import { LinearCycle } from "../../../models/LinearCycle";
import { LinearIssue } from "../../../models/LinearIssue";
import { LinearProject } from "../../../models/LinearProject";
import { LinearTeam } from "../../../models/LinearTeam";
import { LinearUser } from "../../../models/LinearUser";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearIssue)
export class LinearIssueRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => LinearUser, {
    nullable: true
  })
  async assignee(@TypeGraphQL.Root() linearIssue: LinearIssue, @TypeGraphQL.Ctx() ctx: any): Promise<LinearUser | null> {
    return getPrismaFromContext(ctx).linearIssue.findUnique({
      where: {
        id: linearIssue.id,
      },
    }).assignee({});
  }

  @TypeGraphQL.FieldResolver(_type => LinearUser, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() linearIssue: LinearIssue, @TypeGraphQL.Ctx() ctx: any): Promise<LinearUser> {
    return getPrismaFromContext(ctx).linearIssue.findUnique({
      where: {
        id: linearIssue.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => LinearCycle, {
    nullable: false
  })
  async cycle(@TypeGraphQL.Root() linearIssue: LinearIssue, @TypeGraphQL.Ctx() ctx: any): Promise<LinearCycle> {
    return getPrismaFromContext(ctx).linearIssue.findUnique({
      where: {
        id: linearIssue.id,
      },
    }).cycle({});
  }

  @TypeGraphQL.FieldResolver(_type => LinearProject, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() linearIssue: LinearIssue, @TypeGraphQL.Ctx() ctx: any): Promise<LinearProject> {
    return getPrismaFromContext(ctx).linearIssue.findUnique({
      where: {
        id: linearIssue.id,
      },
    }).project({});
  }

  @TypeGraphQL.FieldResolver(_type => LinearTeam, {
    nullable: false
  })
  async team(@TypeGraphQL.Root() linearIssue: LinearIssue, @TypeGraphQL.Ctx() ctx: any): Promise<LinearTeam> {
    return getPrismaFromContext(ctx).linearIssue.findUnique({
      where: {
        id: linearIssue.id,
      },
    }).team({});
  }

  @TypeGraphQL.FieldResolver(_type => Contribution, {
    nullable: false
  })
  async contribution(@TypeGraphQL.Root() linearIssue: LinearIssue, @TypeGraphQL.Ctx() ctx: any): Promise<Contribution> {
    return getPrismaFromContext(ctx).linearIssue.findUnique({
      where: {
        id: linearIssue.id,
      },
    }).contribution({});
  }
}
