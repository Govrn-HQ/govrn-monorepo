import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeCreateManyGuildInputEnvelope } from "../inputs/GuildActivityTypeCreateManyGuildInputEnvelope";
import { GuildActivityTypeCreateOrConnectWithoutGuildInput } from "../inputs/GuildActivityTypeCreateOrConnectWithoutGuildInput";
import { GuildActivityTypeCreateWithoutGuildInput } from "../inputs/GuildActivityTypeCreateWithoutGuildInput";
import { GuildActivityTypeWhereUniqueInput } from "../inputs/GuildActivityTypeWhereUniqueInput";

@TypeGraphQL.InputType("GuildActivityTypeCreateNestedManyWithoutGuildInput", {
  isAbstract: true
})
export class GuildActivityTypeCreateNestedManyWithoutGuildInput {
  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateWithoutGuildInput], {
    nullable: true
  })
  create?: GuildActivityTypeCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: GuildActivityTypeCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: GuildActivityTypeCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildActivityTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildActivityTypeWhereUniqueInput[] | undefined;
}
