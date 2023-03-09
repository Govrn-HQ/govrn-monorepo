import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutGuildsInput } from "../inputs/ContributionCreateNestedOneWithoutGuildsInput";

@TypeGraphQL.InputType("GuildContributionCreateWithoutGuildInput", {
  isAbstract: true
})
export class GuildContributionCreateWithoutGuildInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutGuildsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutGuildsInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  threshold?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  verified?: boolean | undefined;
}
