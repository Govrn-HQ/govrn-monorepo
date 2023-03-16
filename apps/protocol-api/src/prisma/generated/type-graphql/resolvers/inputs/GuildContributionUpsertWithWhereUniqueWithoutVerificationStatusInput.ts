import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateWithoutVerificationStatusInput } from "../inputs/GuildContributionCreateWithoutVerificationStatusInput";
import { GuildContributionUpdateWithoutVerificationStatusInput } from "../inputs/GuildContributionUpdateWithoutVerificationStatusInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionUpsertWithWhereUniqueWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildContributionUpsertWithWhereUniqueWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionUpdateWithoutVerificationStatusInput, {
    nullable: false
  })
  update!: GuildContributionUpdateWithoutVerificationStatusInput;

  @TypeGraphQL.Field(_type => GuildContributionCreateWithoutVerificationStatusInput, {
    nullable: false
  })
  create!: GuildContributionCreateWithoutVerificationStatusInput;
}
