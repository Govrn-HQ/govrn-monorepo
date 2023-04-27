import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeUpdateWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeUpdateWithoutMigrated_fromInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeUpdateWithWhereUniqueWithoutMigrated_fromInput", {
  isAbstract: true
})
export class GuildActivityTypeUpdateWithWhereUniqueWithoutMigrated_fromInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeUpdateWithoutMigrated_fromInput, {
    nullable: false
  })
  data!: GuildActivityTypeUpdateWithoutMigrated_fromInput;
}
