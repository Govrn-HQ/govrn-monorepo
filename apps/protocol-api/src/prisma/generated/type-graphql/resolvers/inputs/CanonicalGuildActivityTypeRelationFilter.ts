import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeWhereInput } from "../inputs/CanonicalGuildActivityTypeWhereInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeRelationFilter", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeRelationFilter {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  is?: CanonicalGuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  isNot?: CanonicalGuildActivityTypeWhereInput | undefined;
}
