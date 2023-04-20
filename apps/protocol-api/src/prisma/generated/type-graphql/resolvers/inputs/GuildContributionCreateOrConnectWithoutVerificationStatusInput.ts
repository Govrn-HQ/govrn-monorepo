import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateWithoutVerificationStatusInput } from "../inputs/GuildContributionCreateWithoutVerificationStatusInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionCreateOrConnectWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildContributionCreateOrConnectWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionCreateWithoutVerificationStatusInput, {
    nullable: false
  })
  create!: GuildContributionCreateWithoutVerificationStatusInput;
}
