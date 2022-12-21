import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAttestationConfidenceArgs } from "./args/AggregateAttestationConfidenceArgs";
import { CreateManyAttestationConfidenceArgs } from "./args/CreateManyAttestationConfidenceArgs";
import { CreateOneAttestationConfidenceArgs } from "./args/CreateOneAttestationConfidenceArgs";
import { DeleteManyAttestationConfidenceArgs } from "./args/DeleteManyAttestationConfidenceArgs";
import { DeleteOneAttestationConfidenceArgs } from "./args/DeleteOneAttestationConfidenceArgs";
import { FindFirstAttestationConfidenceArgs } from "./args/FindFirstAttestationConfidenceArgs";
import { FindFirstAttestationConfidenceOrThrowArgs } from "./args/FindFirstAttestationConfidenceOrThrowArgs";
import { FindManyAttestationConfidenceArgs } from "./args/FindManyAttestationConfidenceArgs";
import { FindUniqueAttestationConfidenceArgs } from "./args/FindUniqueAttestationConfidenceArgs";
import { FindUniqueAttestationConfidenceOrThrowArgs } from "./args/FindUniqueAttestationConfidenceOrThrowArgs";
import { GroupByAttestationConfidenceArgs } from "./args/GroupByAttestationConfidenceArgs";
import { UpdateManyAttestationConfidenceArgs } from "./args/UpdateManyAttestationConfidenceArgs";
import { UpdateOneAttestationConfidenceArgs } from "./args/UpdateOneAttestationConfidenceArgs";
import { UpsertOneAttestationConfidenceArgs } from "./args/UpsertOneAttestationConfidenceArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAttestationConfidence } from "../../outputs/AggregateAttestationConfidence";
import { AttestationConfidenceGroupBy } from "../../outputs/AttestationConfidenceGroupBy";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class AttestationConfidenceCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAttestationConfidence, {
    nullable: false
  })
  async aggregateAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttestationConfidenceArgs): Promise<AggregateAttestationConfidence> {
    return getPrismaFromContext(ctx).attestationConfidence.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAttestationConfidenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: false
  })
  async createOneAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAttestationConfidenceArgs): Promise<AttestationConfidence> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAttestationConfidenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: true
  })
  async deleteOneAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async findFirstAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async findFirstAttestationConfidenceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationConfidenceOrThrowArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AttestationConfidence], {
    nullable: false
  })
  async attestationConfidences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAttestationConfidenceArgs): Promise<AttestationConfidence[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async attestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async getAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAttestationConfidenceOrThrowArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AttestationConfidenceGroupBy], {
    nullable: false
  })
  async groupByAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAttestationConfidenceArgs): Promise<AttestationConfidenceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAttestationConfidenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: true
  })
  async updateOneAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: false
  })
  async upsertOneAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneAttestationConfidenceArgs): Promise<AttestationConfidence> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).attestationConfidence.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
