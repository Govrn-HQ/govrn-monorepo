import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateWithoutMigrated_fromInput } from "../inputs/GuildActivityTypeCreateWithoutMigrated_fromInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateOrConnectWithoutMigrated_fromInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateWithoutMigrated_fromInput, {
    nullable: false
  })
  create!: GuildActivityTypeCreateWithoutMigrated_fromInput;
}
