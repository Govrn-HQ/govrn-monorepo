import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildVerificationStatusCreateOrConnectWithoutGuildInput } from "../inputs/GuildVerificationStatusCreateOrConnectWithoutGuildInput";
import { GuildVerificationStatusCreateWithoutGuildInput } from "../inputs/GuildVerificationStatusCreateWithoutGuildInput";
import { GuildVerificationStatusUpdateWithoutGuildInput } from "../inputs/GuildVerificationStatusUpdateWithoutGuildInput";
import { GuildVerificationStatusUpsertWithoutGuildInput } from "../inputs/GuildVerificationStatusUpsertWithoutGuildInput";
import { GuildVerificationStatusWhereUniqueInput } from "../inputs/GuildVerificationStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildVerificationStatusUpdateOneRequiredWithoutGuildInput", {
  isAbstract: true
})
export class GuildVerificationStatusUpdateOneRequiredWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildVerificationStatusCreateWithoutGuildInput, {
    nullable: true
  })
  create?: GuildVerificationStatusCreateWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusCreateOrConnectWithoutGuildInput, {
    nullable: true
  })
  connectOrCreate?: GuildVerificationStatusCreateOrConnectWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusUpsertWithoutGuildInput, {
    nullable: true
  })
  upsert?: GuildVerificationStatusUpsertWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildVerificationStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildVerificationStatusUpdateWithoutGuildInput, {
    nullable: true
  })
  update?: GuildVerificationStatusUpdateWithoutGuildInput | undefined;
}
