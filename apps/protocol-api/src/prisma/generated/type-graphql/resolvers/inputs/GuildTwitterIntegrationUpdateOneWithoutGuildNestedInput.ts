import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildTwitterIntegrationCreateOrConnectWithoutGuildInput } from "../inputs/GuildTwitterIntegrationCreateOrConnectWithoutGuildInput";
import { GuildTwitterIntegrationCreateWithoutGuildInput } from "../inputs/GuildTwitterIntegrationCreateWithoutGuildInput";
import { GuildTwitterIntegrationUpdateWithoutGuildInput } from "../inputs/GuildTwitterIntegrationUpdateWithoutGuildInput";
import { GuildTwitterIntegrationUpsertWithoutGuildInput } from "../inputs/GuildTwitterIntegrationUpsertWithoutGuildInput";
import { GuildTwitterIntegrationWhereUniqueInput } from "../inputs/GuildTwitterIntegrationWhereUniqueInput";

@TypeGraphQL.InputType("GuildTwitterIntegrationUpdateOneWithoutGuildNestedInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationUpdateOneWithoutGuildNestedInput {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateWithoutGuildInput, {
    nullable: true
  })
  create?: GuildTwitterIntegrationCreateWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateOrConnectWithoutGuildInput, {
    nullable: true
  })
  connectOrCreate?: GuildTwitterIntegrationCreateOrConnectWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationUpsertWithoutGuildInput, {
    nullable: true
  })
  upsert?: GuildTwitterIntegrationUpsertWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildTwitterIntegrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationUpdateWithoutGuildInput, {
    nullable: true
  })
  update?: GuildTwitterIntegrationUpdateWithoutGuildInput | undefined;
}
