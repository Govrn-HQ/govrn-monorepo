import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput } from "../inputs/GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateOrConnectWithoutCanonicalGuildActivityTypeInput {
  @TypeGraphQL.Field(_type => GuildActivityTypeWhereUniqueInput, {
    nullable: false
  })
  where!: GuildActivityTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput, {
    nullable: false
  })
  create!: GuildActivityTypeCreateWithoutCanonicalGuildActivityTypeInput;
}
