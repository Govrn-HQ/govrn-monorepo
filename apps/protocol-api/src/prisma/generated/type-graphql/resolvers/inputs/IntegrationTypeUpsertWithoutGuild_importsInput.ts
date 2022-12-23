import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationTypeCreateWithoutGuild_importsInput } from "../inputs/IntegrationTypeCreateWithoutGuild_importsInput";
import { IntegrationTypeUpdateWithoutGuild_importsInput } from "../inputs/IntegrationTypeUpdateWithoutGuild_importsInput";

@TypeGraphQL.InputType("IntegrationTypeUpsertWithoutGuild_importsInput", {
  isAbstract: true
})
export class IntegrationTypeUpsertWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => IntegrationTypeUpdateWithoutGuild_importsInput, {
    nullable: false
  })
  update!: IntegrationTypeUpdateWithoutGuild_importsInput;

  @TypeGraphQL.Field(_type => IntegrationTypeCreateWithoutGuild_importsInput, {
    nullable: false
  })
  create!: IntegrationTypeCreateWithoutGuild_importsInput;
}
