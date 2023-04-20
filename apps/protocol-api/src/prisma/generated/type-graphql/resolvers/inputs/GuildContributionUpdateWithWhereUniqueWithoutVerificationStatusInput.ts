import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionUpdateWithoutVerificationStatusInput } from "../inputs/GuildContributionUpdateWithoutVerificationStatusInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionUpdateWithWhereUniqueWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildContributionUpdateWithWhereUniqueWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionUpdateWithoutVerificationStatusInput, {
    nullable: false
  })
  data!: GuildContributionUpdateWithoutVerificationStatusInput;
}
