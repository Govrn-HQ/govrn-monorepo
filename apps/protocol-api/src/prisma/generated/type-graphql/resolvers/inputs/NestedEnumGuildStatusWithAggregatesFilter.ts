import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGuildStatusFilter } from "../inputs/NestedEnumGuildStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { GuildStatus } from "../../enums/GuildStatus";

@TypeGraphQL.InputType("NestedEnumGuildStatusWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumGuildStatusWithAggregatesFilter {
  @TypeGraphQL.Field(_type => GuildStatus, {
    nullable: true
  })
  equals?: "INPUTTED" | "VALIDATED" | "ONBOARDED" | undefined;

  @TypeGraphQL.Field(_type => [GuildStatus], {
    nullable: true
  })
  in?: Array<"INPUTTED" | "VALIDATED" | "ONBOARDED"> | undefined;

  @TypeGraphQL.Field(_type => [GuildStatus], {
    nullable: true
  })
  notIn?: Array<"INPUTTED" | "VALIDATED" | "ONBOARDED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGuildStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumGuildStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGuildStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumGuildStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGuildStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumGuildStatusFilter | undefined;
}
