import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildOrderByRelationAggregateInput } from "../inputs/GuildOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildVerificationStatusOrderByWithRelationInput", {
  isAbstract: true
})
export class GuildVerificationStatusOrderByWithRelationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildOrderByRelationAggregateInput, {
    nullable: true
  })
  Guild?: GuildOrderByRelationAggregateInput | undefined;
}
