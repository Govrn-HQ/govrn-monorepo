import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationTypeCreateWithoutGuild_importsInput } from "../inputs/IntegrationTypeCreateWithoutGuild_importsInput";
import { IntegrationTypeWhereUniqueInput } from "../inputs/IntegrationTypeWhereUniqueInput";

@TypeGraphQL.InputType("IntegrationTypeCreateOrConnectWithoutGuild_importsInput", {
  isAbstract: true
})
export class IntegrationTypeCreateOrConnectWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => IntegrationTypeWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationTypeCreateWithoutGuild_importsInput, {
    nullable: false
  })
  create!: IntegrationTypeCreateWithoutGuild_importsInput;
}
