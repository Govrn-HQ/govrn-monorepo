import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutVerificationSettingsInput } from "../inputs/GuildCreateWithoutVerificationSettingsInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildCreateOrConnectWithoutVerificationSettingsInput", {
  isAbstract: true
})
export class GuildCreateOrConnectWithoutVerificationSettingsInput {
  @TypeGraphQL.Field(_type => GuildWhereUniqueInput, {
    nullable: false
  })
  where!: GuildWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutVerificationSettingsInput, {
    nullable: false
  })
  create!: GuildCreateWithoutVerificationSettingsInput;
}
