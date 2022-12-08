import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildVerificationStatusCreateWithoutGuildInput } from "../inputs/GuildVerificationStatusCreateWithoutGuildInput";
import { GuildVerificationStatusWhereUniqueInput } from "../inputs/GuildVerificationStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildVerificationStatusCreateOrConnectWithoutGuildInput", {
  isAbstract: true
})
export class GuildVerificationStatusCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildVerificationStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildVerificationStatusCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildVerificationStatusCreateWithoutGuildInput;
}
