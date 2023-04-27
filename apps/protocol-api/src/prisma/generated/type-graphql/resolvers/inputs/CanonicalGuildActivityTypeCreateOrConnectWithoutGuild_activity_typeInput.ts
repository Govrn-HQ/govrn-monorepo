import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: CanonicalGuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput, {
    nullable: false
  })
  create!: CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput;
}
