import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Contribution } from "../models/Contribution";
import { Guild } from "../models/Guild";
import { GuildContributionVerificationStatus } from "../models/GuildContributionVerificationStatus";

@TypeGraphQL.ObjectType("GuildContribution", {
  isAbstract: true
})
export class GuildContribution {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  guild_id!: number;

  guild?: Guild;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contribution_id!: number;

  contribution?: Contribution;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  verification_status_id?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attestation_threshold?: number | null;

  verificationStatus?: GuildContributionVerificationStatus | null;
}
