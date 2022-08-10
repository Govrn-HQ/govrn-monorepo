import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePartnerArgs } from "./args/AggregatePartnerArgs";
import { Partner } from "../../../models/Partner";
import { AggregatePartner } from "../../outputs/AggregatePartner";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Partner)
export class AggregatePartnerResolver {
  @TypeGraphQL.Query(_returns => AggregatePartner, {
    nullable: false
  })
  async aggregatePartner(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePartnerArgs): Promise<AggregatePartner> {
    return getPrismaFromContext(ctx).partner.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
