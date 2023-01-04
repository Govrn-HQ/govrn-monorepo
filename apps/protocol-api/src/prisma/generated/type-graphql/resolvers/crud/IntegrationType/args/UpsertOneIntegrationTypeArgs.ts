import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IntegrationTypeCreateInput } from "../../../inputs/IntegrationTypeCreateInput";
import { IntegrationTypeUpdateInput } from "../../../inputs/IntegrationTypeUpdateInput";
import { IntegrationTypeWhereUniqueInput } from "../../../inputs/IntegrationTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIntegrationTypeArgs {
  @TypeGraphQL.Field(_type => IntegrationTypeWhereUniqueInput, {
    nullable: false
  })
  where!: IntegrationTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IntegrationTypeCreateInput, {
    nullable: false
  })
  create!: IntegrationTypeCreateInput;

  @TypeGraphQL.Field(_type => IntegrationTypeUpdateInput, {
    nullable: false
  })
  update!: IntegrationTypeUpdateInput;
}
