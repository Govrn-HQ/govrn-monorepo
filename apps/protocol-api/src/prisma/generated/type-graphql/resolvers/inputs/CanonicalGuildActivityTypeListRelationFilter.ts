import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeWhereInput } from "../inputs/CanonicalGuildActivityTypeWhereInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeListRelationFilter", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeListRelationFilter {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  every?: CanonicalGuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  some?: CanonicalGuildActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereInput, {
    nullable: true
  })
  none?: CanonicalGuildActivityTypeWhereInput | undefined;
}
