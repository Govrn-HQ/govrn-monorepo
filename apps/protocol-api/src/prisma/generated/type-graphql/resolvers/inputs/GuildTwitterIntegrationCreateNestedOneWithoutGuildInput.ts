import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildTwitterIntegrationCreateOrConnectWithoutGuildInput } from "../inputs/GuildTwitterIntegrationCreateOrConnectWithoutGuildInput";
import { GuildTwitterIntegrationCreateWithoutGuildInput } from "../inputs/GuildTwitterIntegrationCreateWithoutGuildInput";
import { GuildTwitterIntegrationWhereUniqueInput } from "../inputs/GuildTwitterIntegrationWhereUniqueInput";

@TypeGraphQL.InputType("GuildTwitterIntegrationCreateNestedOneWithoutGuildInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationCreateNestedOneWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateWithoutGuildInput, {
    nullable: true
  })
  create?: GuildTwitterIntegrationCreateWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateOrConnectWithoutGuildInput, {
    nullable: true
  })
  connectOrCreate?: GuildTwitterIntegrationCreateOrConnectWithoutGuildInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildTwitterIntegrationWhereUniqueInput | undefined;
}
