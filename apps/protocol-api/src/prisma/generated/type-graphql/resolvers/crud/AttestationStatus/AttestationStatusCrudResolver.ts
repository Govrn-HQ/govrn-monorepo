import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAttestationStatusArgs } from "./args/AggregateAttestationStatusArgs";
import { CreateManyAttestationStatusArgs } from "./args/CreateManyAttestationStatusArgs";
import { CreateOneAttestationStatusArgs } from "./args/CreateOneAttestationStatusArgs";
import { DeleteManyAttestationStatusArgs } from "./args/DeleteManyAttestationStatusArgs";
import { DeleteOneAttestationStatusArgs } from "./args/DeleteOneAttestationStatusArgs";
import { FindFirstAttestationStatusArgs } from "./args/FindFirstAttestationStatusArgs";
import { FindFirstAttestationStatusOrThrowArgs } from "./args/FindFirstAttestationStatusOrThrowArgs";
import { FindManyAttestationStatusArgs } from "./args/FindManyAttestationStatusArgs";
import { FindUniqueAttestationStatusArgs } from "./args/FindUniqueAttestationStatusArgs";
import { FindUniqueAttestationStatusOrThrowArgs } from "./args/FindUniqueAttestationStatusOrThrowArgs";
import { GroupByAttestationStatusArgs } from "./args/GroupByAttestationStatusArgs";
import { UpdateManyAttestationStatusArgs } from "./args/UpdateManyAttestationStatusArgs";
import { UpdateOneAttestationStatusArgs } from "./args/UpdateOneAttestationStatusArgs";
import { UpsertOneAttestationStatusArgs } from "./args/UpsertOneAttestationStatusArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AttestationStatus } from "../../../models/AttestationStatus";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAttestationStatus } from "../../outputs/AggregateAttestationStatus";
import { AttestationStatusGroupBy } from "../../outputs/AttestationStatusGroupBy";

@TypeGraphQL.Resolver(_of => AttestationStatus)
export class AttestationStatusCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAttestationStatus, {
    nullable: false
  })
  async aggregateAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttestationStatusArgs): Promise<AggregateAttestationStatus> {
    return getPrismaFromContext(ctx).attestationStatus.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAttestationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationStatus, {
    nullable: false
  })
  async createOneAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAttestationStatusArgs): Promise<AttestationStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAttestationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationStatus, {
    nullable: true
  })
  async deleteOneAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAttestationStatusArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationStatus, {
    nullable: true
  })
  async findFirstAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationStatusArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationStatus, {
    nullable: true
  })
  async findFirstAttestationStatusOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationStatusOrThrowArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AttestationStatus], {
    nullable: false
  })
  async attestationStatuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAttestationStatusArgs): Promise<AttestationStatus[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationStatus, {
    nullable: true
  })
  async attestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAttestationStatusArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationStatus, {
    nullable: true
  })
  async getAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAttestationStatusOrThrowArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AttestationStatusGroupBy], {
    nullable: false
  })
  async groupByAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAttestationStatusArgs): Promise<AttestationStatusGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAttestationStatusArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationStatus, {
    nullable: true
  })
  async updateOneAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAttestationStatusArgs): Promise<AttestationStatus | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationStatus, {
    nullable: false
  })
  async upsertOneAttestationStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAttestationStatusArgs): Promise<AttestationStatus> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationStatus.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
