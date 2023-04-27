import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput";
import { CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput";
import { CanonicalGuildActivityTypeUpdateWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeUpdateWithoutGuild_activity_typeInput";
import { CanonicalGuildActivityTypeUpsertWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeUpsertWithoutGuild_activity_typeInput";
import { CanonicalGuildActivityTypeWhereUniqueInput } from "../inputs/CanonicalGuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeUpdateOneWithoutGuild_activity_typeNestedInput {
  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput, {
    nullable: true
  })
  create?: CanonicalGuildActivityTypeCreateWithoutGuild_activity_typeInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput, {
    nullable: true
  })
  connectOrCreate?: CanonicalGuildActivityTypeCreateOrConnectWithoutGuild_activity_typeInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpsertWithoutGuild_activity_typeInput, {
    nullable: true
  })
  upsert?: CanonicalGuildActivityTypeUpsertWithoutGuild_activity_typeInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: CanonicalGuildActivityTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeUpdateWithoutGuild_activity_typeInput, {
    nullable: true
  })
  update?: CanonicalGuildActivityTypeUpdateWithoutGuild_activity_typeInput | undefined;
}
