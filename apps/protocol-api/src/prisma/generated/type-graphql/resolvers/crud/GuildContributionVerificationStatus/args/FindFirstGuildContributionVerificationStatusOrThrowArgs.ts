import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GuildContributionVerificationStatusOrderByWithRelationInput } from "../../../inputs/GuildContributionVerificationStatusOrderByWithRelationInput";
import { GuildContributionVerificationStatusWhereInput } from "../../../inputs/GuildContributionVerificationStatusWhereInput";
import { GuildContributionVerificationStatusWhereUniqueInput } from "../../../inputs/GuildContributionVerificationStatusWhereUniqueInput";
import { GuildContributionVerificationStatusScalarFieldEnum } from "../../../../enums/GuildContributionVerificationStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstGuildContributionVerificationStatusOrThrowArgs {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereInput, {
    nullable: true
  })
  where?: GuildContributionVerificationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionVerificationStatusOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GuildContributionVerificationStatusOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: GuildContributionVerificationStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionVerificationStatusScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "name" | "verified" | "attestationThreshold"> | undefined;
}
