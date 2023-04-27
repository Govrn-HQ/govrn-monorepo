import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateNestedOneWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateNestedOneWithoutMigrated_fromInput";
import { CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput } from "../inputs/CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput";
import { GuildCreateNestedOneWithoutActivity_typeInput } from "../inputs/GuildCreateNestedOneWithoutActivity_typeInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateWithoutActivity_typeInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateWithoutActivity_typeInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutActivity_typeInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutActivity_typeInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutMigrated_fromInput, {
    nullable: true
  })
  migrated_from?: ActivityTypeCreateNestedOneWithoutMigrated_fromInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput, {
    nullable: true
  })
  CanonicalGuildActivityType?: CanonicalGuildActivityTypeCreateNestedOneWithoutGuild_activity_typeInput | undefined;
}
