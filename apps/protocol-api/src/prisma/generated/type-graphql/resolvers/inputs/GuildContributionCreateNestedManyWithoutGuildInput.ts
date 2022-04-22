import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateManyGuildInputEnvelope } from "../inputs/GuildContributionCreateManyGuildInputEnvelope";
import { GuildContributionCreateOrConnectWithoutGuildInput } from "../inputs/GuildContributionCreateOrConnectWithoutGuildInput";
import { GuildContributionCreateWithoutGuildInput } from "../inputs/GuildContributionCreateWithoutGuildInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionCreateNestedManyWithoutGuildInput", {
  isAbstract: true
})
export class GuildContributionCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [GuildContributionCreateWithoutGuildInput], {
    nullable: true
  })
  create?: GuildContributionCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: GuildContributionCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildContributionCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: GuildContributionCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildContributionWhereUniqueInput[] | undefined;
}
