import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAttestationConfidenceArgs } from "./args/AggregateAttestationConfidenceArgs";
import { CreateAttestationConfidenceArgs } from "./args/CreateAttestationConfidenceArgs";
import { CreateManyAttestationConfidenceArgs } from "./args/CreateManyAttestationConfidenceArgs";
import { DeleteAttestationConfidenceArgs } from "./args/DeleteAttestationConfidenceArgs";
import { DeleteManyAttestationConfidenceArgs } from "./args/DeleteManyAttestationConfidenceArgs";
import { FindFirstAttestationConfidenceArgs } from "./args/FindFirstAttestationConfidenceArgs";
import { FindManyAttestationConfidenceArgs } from "./args/FindManyAttestationConfidenceArgs";
import { FindUniqueAttestationConfidenceArgs } from "./args/FindUniqueAttestationConfidenceArgs";
import { GroupByAttestationConfidenceArgs } from "./args/GroupByAttestationConfidenceArgs";
import { UpdateAttestationConfidenceArgs } from "./args/UpdateAttestationConfidenceArgs";
import { UpdateManyAttestationConfidenceArgs } from "./args/UpdateManyAttestationConfidenceArgs";
import { UpsertAttestationConfidenceArgs } from "./args/UpsertAttestationConfidenceArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AttestationConfidence } from "../../../models/AttestationConfidence";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAttestationConfidence } from "../../outputs/AggregateAttestationConfidence";
import { AttestationConfidenceGroupBy } from "../../outputs/AttestationConfidenceGroupBy";

@TypeGraphQL.Resolver(_of => AttestationConfidence)
export class AttestationConfidenceCrudResolver {
  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async attestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AttestationConfidence, {
    nullable: true
  })
  async findFirstAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AttestationConfidence], {
    nullable: false
  })
  async attestationConfidences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAttestationConfidenceArgs): Promise<AttestationConfidence[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: false
  })
  async createAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateAttestationConfidenceArgs): Promise<AttestationConfidence> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAttestationConfidenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: true
  })
  async deleteAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: true
  })
  async updateAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateAttestationConfidenceArgs): Promise<AttestationConfidence | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAttestationConfidenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAttestationConfidenceArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AttestationConfidence, {
    nullable: false
  })
  async upsertAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertAttestationConfidenceArgs): Promise<AttestationConfidence> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateAttestationConfidence, {
    nullable: false
  })
  async aggregateAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAttestationConfidenceArgs): Promise<AggregateAttestationConfidence> {
    return getPrismaFromContext(ctx).attestationConfidence.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [AttestationConfidenceGroupBy], {
    nullable: false
  })
  async groupByAttestationConfidence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAttestationConfidenceArgs): Promise<AttestationConfidenceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).attestationConfidence.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
