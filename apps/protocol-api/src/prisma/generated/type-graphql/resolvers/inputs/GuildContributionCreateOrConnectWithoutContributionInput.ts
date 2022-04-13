import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateWithoutContributionInput } from "../inputs/GuildContributionCreateWithoutContributionInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionCreateOrConnectWithoutContributionInput", {
  isAbstract: true
})
export class GuildContributionCreateOrConnectWithoutContributionInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionCreateWithoutContributionInput, {
    nullable: false
  })
  create!: GuildContributionCreateWithoutContributionInput;
}
