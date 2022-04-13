import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionUpdateWithoutContributionInput } from "../inputs/GuildContributionUpdateWithoutContributionInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionUpdateWithWhereUniqueWithoutContributionInput", {
  isAbstract: true
})
export class GuildContributionUpdateWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => GuildContributionWhereUniqueInput, {
    nullable: false
  })
  where!: GuildContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildContributionUpdateWithoutContributionInput, {
    nullable: false
  })
  data!: GuildContributionUpdateWithoutContributionInput;
}
