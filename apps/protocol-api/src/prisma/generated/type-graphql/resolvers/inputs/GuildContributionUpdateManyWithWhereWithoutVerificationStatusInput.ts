import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionScalarWhereInput } from "../inputs/GuildContributionScalarWhereInput";
import { GuildContributionUpdateManyMutationInput } from "../inputs/GuildContributionUpdateManyMutationInput";

@TypeGraphQL.InputType("GuildContributionUpdateManyWithWhereWithoutVerificationStatusInput", {
  isAbstract: true
})
export class GuildContributionUpdateManyWithWhereWithoutVerificationStatusInput {
  @TypeGraphQL.Field(_type => GuildContributionScalarWhereInput, {
    nullable: false
  })
  where!: GuildContributionScalarWhereInput;

  @TypeGraphQL.Field(_type => GuildContributionUpdateManyMutationInput, {
    nullable: false
  })
  data!: GuildContributionUpdateManyMutationInput;
}
