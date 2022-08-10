import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateManyContributionInput } from "../inputs/GuildContributionCreateManyContributionInput";

@TypeGraphQL.InputType("GuildContributionCreateManyContributionInputEnvelope", {
  isAbstract: true
})
export class GuildContributionCreateManyContributionInputEnvelope {
  @TypeGraphQL.Field(_type => [GuildContributionCreateManyContributionInput], {
    nullable: false
  })
  data!: GuildContributionCreateManyContributionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
