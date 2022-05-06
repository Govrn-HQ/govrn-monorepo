import * as TypeGraphQL from "type-graphql";
import { LinearIssue } from "../../../models/LinearIssue";
import { LinearUser } from "../../../models/LinearUser";
import { User } from "../../../models/User";
import { LinearUserAssigned_issuesArgs } from "./args/LinearUserAssigned_issuesArgs";
import { LinearUserCreated_issuesArgs } from "./args/LinearUserCreated_issuesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LinearUser)
export class LinearUserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() linearUser: LinearUser, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).linearUser.findUnique({
      where: {
        id: linearUser.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [LinearIssue], {
    nullable: false
  })
  async assigned_issues(@TypeGraphQL.Root() linearUser: LinearUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LinearUserAssigned_issuesArgs): Promise<LinearIssue[]> {
    return getPrismaFromContext(ctx).linearUser.findUnique({
      where: {
        id: linearUser.id,
      },
    }).assigned_issues(args);
  }

  @TypeGraphQL.FieldResolver(_type => [LinearIssue], {
    nullable: false
  })
  async created_issues(@TypeGraphQL.Root() linearUser: LinearUser, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LinearUserCreated_issuesArgs): Promise<LinearIssue[]> {
    return getPrismaFromContext(ctx).linearUser.findUnique({
      where: {
        id: linearUser.id,
      },
    }).created_issues(args);
  }
}
