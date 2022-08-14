import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedOneWithoutContributionsInput } from "../inputs/GuildCreateNestedOneWithoutContributionsInput";

@TypeGraphQL.InputType("GuildContributionCreateWithoutContributionInput", {
  isAbstract: true
})
export class GuildContributionCreateWithoutContributionInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutContributionsInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutContributionsInput;
}
