import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeCreateNestedOneWithoutGuildsInput } from "../inputs/ActivityTypeCreateNestedOneWithoutGuildsInput";
import { ActivityTypeCreateNestedOneWithoutMigrated_fromInput } from "../inputs/ActivityTypeCreateNestedOneWithoutMigrated_fromInput";
import { GuildCreateNestedOneWithoutActivity_typeInput } from "../inputs/GuildCreateNestedOneWithoutActivity_typeInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput {
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

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutGuildsInput, {
    nullable: false
  })
  activity_type!: ActivityTypeCreateNestedOneWithoutGuildsInput;

  @TypeGraphQL.Field(_type => ActivityTypeCreateNestedOneWithoutMigrated_fromInput, {
    nullable: true
  })
  migrated_from?: ActivityTypeCreateNestedOneWithoutMigrated_fromInput | undefined;
}
