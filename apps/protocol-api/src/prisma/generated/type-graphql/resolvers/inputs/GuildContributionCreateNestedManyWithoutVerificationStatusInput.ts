import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateManyVerificationStatusInputEnvelope } from "../inputs/GuildContributionCreateManyVerificationStatusInputEnvelope";
import { GuildContributionCreateOrConnectWithoutVerificationStatusInput } from "../inputs/GuildContributionCreateOrConnectWithoutVerificationStatusInput";
import { GuildContributionCreateWithoutVerificationStatusInput } from "../inputs/GuildContributionCreateWithoutVerificationStatusInput";
import { GuildContributionWhereUniqueInput } from "../inputs/GuildContributionWhereUniqueInput";

@TypeGraphQL.InputType("GuildContributionCreateNestedManyWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildContributionCreateNestedManyWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => [GuildContributionCreateWithoutVerificationStatusInput], {
    nullable: true
  })
  create?: GuildContributionCreateWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionCreateOrConnectWithoutVerificationStatusInput], {
    nullable: true
  })
  connectOrCreate?: GuildContributionCreateOrConnectWithoutVerificationStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildContributionCreateManyVerificationStatusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildContributionCreateManyVerificationStatusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildContributionWhereUniqueInput[] | undefined;
}
