import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateWithoutGuildInput } from "../inputs/GuildActivityTypeCreateWithoutGuildInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateOrConnectWithoutGuildInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildActivityTypeCreateWithoutGuildInput;
}
