import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionVerificationStatusWhereInput } from "../inputs/GuildContributionVerificationStatusWhereInput";

@TypeGraphQL.InputType("GuildContributionVerificationStatusRelationFilter", {
  isAbstract: true
})
export class GuildContributionVerificationStatusRelationFilter {
  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereInput, {
    nullable: true
  })
  is?: GuildContributionVerificationStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionVerificationStatusWhereInput, {
    nullable: true
  })
  isNot?: GuildContributionVerificationStatusWhereInput | undefined;
}
