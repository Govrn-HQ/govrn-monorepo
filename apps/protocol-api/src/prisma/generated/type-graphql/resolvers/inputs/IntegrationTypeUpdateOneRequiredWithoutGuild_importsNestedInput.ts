import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationTypeCreateOrConnectWithoutGuild_importsInput } from "../inputs/IntegrationTypeCreateOrConnectWithoutGuild_importsInput";
import { IntegrationTypeCreateWithoutGuild_importsInput } from "../inputs/IntegrationTypeCreateWithoutGuild_importsInput";
import { IntegrationTypeUpdateWithoutGuild_importsInput } from "../inputs/IntegrationTypeUpdateWithoutGuild_importsInput";
import { IntegrationTypeUpsertWithoutGuild_importsInput } from "../inputs/IntegrationTypeUpsertWithoutGuild_importsInput";
import { IntegrationTypeWhereUniqueInput } from "../inputs/IntegrationTypeWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput", {
  isAbstract: true
})
export class IntegrationTypeUpdateOneRequiredWithoutGuild_importsNestedInput {
  @TypeGraphQL.Field(_type => IntegrationTypeCreateWithoutGuild_importsInput, {
    nullable: true
  })
  create?: IntegrationTypeCreateWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeCreateOrConnectWithoutGuild_importsInput, {
    nullable: true
  })
  connectOrCreate?: IntegrationTypeCreateOrConnectWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeUpsertWithoutGuild_importsInput, {
    nullable: true
  })
  upsert?: IntegrationTypeUpsertWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: IntegrationTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeUpdateWithoutGuild_importsInput, {
    nullable: true
  })
  update?: IntegrationTypeUpdateWithoutGuild_importsInput | undefined;
}
