import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutGuildsInput } from "../inputs/ContributionCreateNestedOneWithoutGuildsInput";
import { GuildCreateNestedOneWithoutContributionsInput } from "../inputs/GuildCreateNestedOneWithoutContributionsInput";

@TypeGraphQL.InputType("GuildContributionCreateWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildContributionCreateWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutContributionsInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutContributionsInput;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutGuildsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutGuildsInput;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  verified?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attestation_threshold?: number | undefined;
}
