import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeCreateWithoutGuildInput";
import { CanonicalGuildActivityTypeUpdateWithoutGuildInput } from "../inputs/CanonicalGuildActivityTypeUpdateWithoutGuildInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CanonicalGuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: CanonicalGuildActivityTypeUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateWithoutGuildInput, {
    nullable: false
  })
  create!: CanonicalGuildActivityTypeCreateWithoutGuildInput;
}
