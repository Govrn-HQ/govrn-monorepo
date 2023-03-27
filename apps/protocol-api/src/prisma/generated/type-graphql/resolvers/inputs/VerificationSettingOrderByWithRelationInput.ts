import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildOrderByRelationAggregateInput } from "../inputs/GuildOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VerificationSettingOrderByWithRelationInput", {
  isAbstract: true
})
export class VerificationSettingOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  num_of_attestations?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildOrderByRelationAggregateInput, {
    nullable: true
  })
  guilds?: GuildOrderByRelationAggregateInput | undefined;
}
