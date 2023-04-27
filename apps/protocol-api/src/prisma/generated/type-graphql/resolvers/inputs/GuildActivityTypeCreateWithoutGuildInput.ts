import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateNestedOneWithoutGuildsInput } from "../inputs/ActivityTypeCreateNestedOneWithoutGuildsInput";
import { ActivityTypeCreateNestedOneWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateNestedOneWithoutMigrated_fromInput";
import { CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateWithoutGuildInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateWithoutGuildInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutGuildsInput, {
    nullable: false
  })
  activity_type!: ActivityTypeCreateNestedOneWithoutGuildsInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutMigrated_fromInput, {
    nullable: true
  })
  migrated_from?: ActivityTypeCreateNestedOneWithoutMigrated_fromInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput, {
    nullable: true
  })
  CanonicalGuildActivityType?: CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput | undefined;
}
