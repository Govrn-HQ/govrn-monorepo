import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGuildStatusFilter } from "../inputs/NestedEnumGuildStatusFilter";
import { GuildStatus } from "../../enums/GuildStatus";

@TypeGraphQL.InputType("EnumGuildStatusFilter", {
  isAbstract: true
})
export class EnumGuildStatusFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumGuildStatusFilter, {
    nullable: true
  })
  not?: NestedEnumGuildStatusFilter | undefined;
}
