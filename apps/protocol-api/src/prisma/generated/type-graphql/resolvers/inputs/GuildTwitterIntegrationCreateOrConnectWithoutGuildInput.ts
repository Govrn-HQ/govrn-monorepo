import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildTwitterIntegrationCreateWithoutGuildInput } from "../inputs/GuildTwitterIntegrationCreateWithoutGuildInput";
import { GuildTwitterIntegrationWhereUniqueInput } from "../inputs/GuildTwitterIntegrationWhereUniqueInput";

@TypeGraphQL.InputType("GuildTwitterIntegrationCreateOrConnectWithoutGuildInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildTwitterIntegrationWhereUniqueInput, {
    nullable: false
  })
  where!: GuildTwitterIntegrationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildTwitterIntegrationCreateWithoutGuildInput;
}
