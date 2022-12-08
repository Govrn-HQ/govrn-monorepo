import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildVerificationStatusCreateOrConnectWithoutGuildInput } from "../inputs/GuildVerificationStatusCreateOrConnectWithoutGuildInput";
import { GuildVerificationStatusCreateWithoutGuildInput } from "../inputs/GuildVerificationStatusCreateWithoutGuildInput";
import { GuildVerificationStatusWhereUniqueInput } from "../inputs/GuildVerificationStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildVerificationStatusCreateNestedOneWithoutGuildInput", {
  isAbstract: true
})
export class GuildVerificationStatusCreateNestedOneWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildVerificationStatusCreateWithoutGuildInput, {
    nullable: true
  })
  create?: GuildVerificationStatusCreateWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusCreateOrConnectWithoutGuildInput, {
    nullable: true
  })
  connectOrCreate?: GuildVerificationStatusCreateOrConnectWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildVerificationStatusWhereUniqueInput | undefined;
}
