import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeCreateWithoutGuildInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeCreateWithoutGuildInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput, {
    nullable: false
  })
  guild_activity_type!: GuildActivityTypeCreateNestedOneWithoutCanonicalGuildActivityTypeInput;
}
