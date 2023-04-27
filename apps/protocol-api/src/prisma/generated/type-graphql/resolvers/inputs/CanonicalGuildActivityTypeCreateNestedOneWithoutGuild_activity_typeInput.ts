import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput";
import { CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput, {
    nullable: true
  })
  create?: CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput, {
    nullable: true
  })
  connectOrCreate?: CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: CanonicalGuildActivityTypeWhereUniqueInput | undefined;
}
