import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationTypeCreateOrConnectWithoutGuild_importsInput } from "../inputs/IntegrationTypeCreateOrConnectWithoutGuild_importsInput";
import { IntegrationTypeCreateWithoutGuild_importsInput } from "../inputs/IntegrationTypeCreateWithoutGuild_importsInput";
import { IntegrationTypeWhereUniqueInput } from "../inputs/IntegrationTypeWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationTypeCreateNestedOneWithoutGuild_importsInput", {
  isAbstract: true
})
export class IntegrationTypeCreateNestedOneWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => IntegrationTypeCreateWithoutGuild_importsInput, {
    nullable: true
  })
  create?: IntegrationTypeCreateWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeCreateOrConnectWithoutGuild_importsInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationTypeCreateOrConnectWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationTypeWhereUniqueInput | undefined;
}
