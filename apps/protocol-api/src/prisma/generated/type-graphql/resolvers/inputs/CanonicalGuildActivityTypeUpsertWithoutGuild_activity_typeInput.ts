import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput";
import { CanonicalGuildActivityTypeUpdateWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeUpdateWithoutGuild_activity_typeInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeUpsertWithoutGuild_activity_typeInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeUpsertWithoutGuild_activity_typeInput {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateWithoutGuild_activity_typeInput, {
    nullable: false
  })
  update!: CanonicalGuildActivityTypeUpdateWithoutGuild_activity_typeInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput, {
    nullable: false
  })
  create!: CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput;
}
