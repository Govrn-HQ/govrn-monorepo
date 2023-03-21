import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionCreateNestedManyWithoutVerificationStatusInput } from "../inputs/GuildContributionCreateNestedManyWithoutVerificationStatusInput";

@TypeGraphQL.InputType("GuildContributionVerificationStatusCreateInput", {
  isAbstract: true
})
export class GuildContributionVerificationStatusCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GuildContributionCreateNestedManyWithoutVerificationStatusInput, {
    nullable: true
  })
  guild_contributions?: GuildContributionCreateNestedManyWithoutVerificationStatusInput | undefined;
}
